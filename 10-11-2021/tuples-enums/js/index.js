"use strict";
let marks = [
    ["English", 80],
    ["Maths", 90],
    ["Science", 95],
    ["Social", 100],
];
var COLORS;
(function (COLORS) {
    COLORS["RED"] = "#FF0000";
    COLORS["WHITE"] = "#FFFFFF";
    COLORS["GREEN"] = "#008000";
    COLORS["BLUE"] = "#0000FF";
    COLORS["YELLOW"] = "#FFFF00";
    COLORS["GRAY"] = "#808080";
    COLORS["BLACK"] = "#000000";
    COLORS["PINK"] = "#FFC0CB";
    COLORS["BROWN"] = "#A52A2A";
    COLORS["ORANGE"] = "#FFA500";
    COLORS["PURPLE"] = "#800080";
    COLORS["TEAL"] = "#008080";
    COLORS["SILVER"] = "#C0C0C0";
    COLORS["MAROON"] = "#800000";
    COLORS["OLIVE"] = "#808000";
    COLORS["NAVY"] = "#000080";
    COLORS["LIME"] = "#00FF00";
    COLORS["AQUA"] = "#00FFFF";
})(COLORS || (COLORS = {}));
var WEEKDAYS;
(function (WEEKDAYS) {
    WEEKDAYS[WEEKDAYS["MONDAY"] = 1] = "MONDAY";
    WEEKDAYS[WEEKDAYS["TUESDAY"] = 2] = "TUESDAY";
    WEEKDAYS[WEEKDAYS["WEDNESDAY"] = 3] = "WEDNESDAY";
    WEEKDAYS[WEEKDAYS["THURSDAY"] = 14] = "THURSDAY";
    WEEKDAYS[WEEKDAYS["FRIDAY"] = 15] = "FRIDAY";
    WEEKDAYS[WEEKDAYS["SATURDAY"] = 16] = "SATURDAY";
    WEEKDAYS[WEEKDAYS["SUNDAY"] = 0] = "SUNDAY";
})(WEEKDAYS || (WEEKDAYS = {}));
console.log(WEEKDAYS.SATURDAY);
console.log(WEEKDAYS[7]);
console.log(COLORS.TEAL);
//# sourceMappingURL=index.js.map