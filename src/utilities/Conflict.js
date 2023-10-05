const parseCourseTime = (str) => {
    const [daysString, time] = str.split(" ");
    const [start, end] = time.split("-").map(t => parseInt(t.replace(":", ""), 10));
    const dayMapping = { "M": "Monday", "T": "Tuesday", "W": "Wednesday", "Th": "Thursday", "F": "Friday", "Sa": "Saturday", "Su": "Sunday" };
    let parsedDays = Array.from(daysString.matchAll(/M|T|W|Th|F|Sa|Su/g)).map(day => dayMapping[day]);

    return { days: parsedDays, start, end };
};

const hasTimeConflict = (str1, str2) => {
    const [course1, course2] = [str1, str2].map(str => parseCourseTime(str));

    return course1.days.some(day1 =>
        course2.days.includes(day1) &&
        (
            (course1.start >= course2.start && course1.start < course2.end) ||
            (course1.end > course2.start && course1.end <= course2.end) ||
            (course1.start <= course2.start && course1.end >= course2.end)
        )
    );
};

export const isConflict = (course, courseList) =>
    courseList.some(c => c !== course && c.term === course.term && hasTimeConflict(c.meets, course.meets));
