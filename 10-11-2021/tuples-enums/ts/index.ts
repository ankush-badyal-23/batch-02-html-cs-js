// Tuples
type TSubjectMarks = [string, number];

let marks: TSubjectMarks[] = [
  ["English", 80],
  ["Maths", 90],
  ["Science", 95],
  ["Social", 100],
];

enum COLORS {
    RED = "#FF0000",
    WHITE = "#FFFFFF",
    GREEN = "#008000",
    BLUE = "#0000FF",
    YELLOW = "#FFFF00",
    GRAY = "#808080",
    BLACK = "#000000",
    PINK = "#FFC0CB",
    BROWN = "#A52A2A",
    ORANGE = "#FFA500",
    PURPLE = "#800080",
    TEAL = "#008080",
    SILVER = "#C0C0C0",
    MAROON = "#800000",
    OLIVE = "#808000",
    NAVY = "#000080",
    LIME = "#00FF00",
    AQUA = "#00FFFF",
}

enum WEEKDAYS {
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
}

console.log(WEEKDAYS.SATURDAY);
console.log(WEEKDAYS[7]);

console.log(COLORS.TEAL);