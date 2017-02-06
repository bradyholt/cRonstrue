import { Locale } from "../locale"

export class sv implements Locale {
    atX0SecondsPastTheMinuteGt20(): string { return null; }
    atX0MinutesPastTheHourGt20(): string { return null; }
    commaMonthX0ThroughMonthX1(): string { return null; }
    commaYearX0ThroughYearX1(): string { return null; }

    use24HourTimeFormatByDefault() { return true; }

    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "Ett fel inträffade vid generering av uttryckets beskrivning. Kontrollera cron-uttryckets syntax.";
    };
    everyMinute() {
        return "varje minut";
    };
    everyHour() {
        return "varje timme";
    };
    atSpace() {
        return "Kl ";
    };
    everyMinutebetweenX0AndX1() {
        return "Varje minut mellan %s och %s";
    };
    at() {
        return "Kl";
    };
    spaceAnd() {
        return " och";
    };
    everysecond() {
        return "varje sekund";
    };
    everyX0Seconds() {
        return "varje %s sekund";
    };
    secondsX0ThroughX1PastTheMinute() {
        return "sekunderna från %s till och med %s efter minuten";
    };
    atX0SecondsPastTheMinute() {
        return "på %s sekunder efter minuten";
    };
    everyX0Minutes() {
        return "var %s minut";
    };
    minutesX0ThroughX1PastTheHour() {
        return "minuterna från %s till och med %s efter timmen"
    };
    atX0MinutesPastTheHour() {
        return "på %s minuten efter timmen";
    };
    everyX0Hours() {
        return "var %s timme";
    };
    betweenX0AndX1() {
        return "mellan %s och %s";
    };
    atX0() {
        return "kl %s";
    };
    commaEveryDay() {
        return ", varje dag";
    };
    commaEveryX0daysOfTheWeek() {
        return ", var %s dag i veckan";
    };
    commaX0ThroughX1() {
        return ", %s till %s";
    };
    first() {
        return "första";
    };
    second() {
        return "andra";
    };
    third() {
        return "tredje";
    };
    forth() {
        return "fjärde";
    };
    fifth() {
        return "femte";
    };
    commaOnThe() {
        return ", den ";
    };
    spaceX0OfTheMonth() {
        return " %sen av månaden";
    };
    commaOnTheLastX0OfTheMonth() {
        return ", på sista %s av månaden";
    };
    commaOnlyOnX0() {
        return ", varje %s";
    };
    commaEveryX0Months() {
        return ", var %s månad";
    };
    commaOnlyInX0() {
        return ", bara på %s";
    };
    commaOnTheLastDayOfTheMonth() {
        return ", på sista dagen av månaden";
    };
    commaOnTheLastWeekdayOfTheMonth() {
        return ", på sista veckodag av månaden";
    };
    firstWeekday() {
        return "första veckodag";
    };
    weekdayNearestDayX0() {
        return "veckodagen närmast dag %s";
    };
    commaOnTheX0OfTheMonth() {
        return ", på den %s av månaden";
    };
    commaEveryX0Days() {
        return ", var %s dag";
    };
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", mellan dag %s och %s av månaden";
    };
    commaOnDayX0OfTheMonth() {
        return ", på dag %s av månaden";
    };
    spaceAndSpace() {
        return " och ";
    };
    commaEveryMinute() {
        return ", varje minut";
    };
    commaEveryHour() {
        return ", varje timme";
    };
    commaEveryX0Years() {
        return ", var %s år";
    };
    commaStartingX0() {
        return ", startar %s";
    };
    daysOfTheWeek() {
        return ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"];
    }
    monthsOfTheYear() {
        return ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];
    }
}
