export class DataHelper{

    static months = [
        "Styczeń", "Luty", "Marzec", 
        "Kwiecień", "Maj", "Czerwiec", 
        "Lipiec", "Sierpień", "Wrzesień", 
        "Październik", "Listopad", "Grudzień"
    ]

    static conjugateMonths = [
        "Stycznia", "Lutego", "Marca", 
        "Kwietnia", "Maja", "Czerwca", 
        "Lipca", "Sierpnia", "Września", 
        "Paźdzernika", "Listopada", "Grudnia"
    ]

    static days = [
        "Poniedziałek", "Wtorek", "Środa",
        "Czwartek", "Piątek", "Sobota", "Niedziela"
    ]

    static getCurrentFormatedDate(): string {
        let curDate = new Date();

        return this.days[curDate.getDay() - 1] +", "+ curDate.getDate() +" "+ this.conjugateMonths[curDate.getMonth()] +" "+ curDate.getFullYear();
    }

    static getCurrentQuarter(): number {
        let curDate = new Date();
        return Math.floor((curDate.getMonth() + 3) / 3);
    }

    static getCurrentMonth(): string {
        return this.months[new Date().getMonth()];
    }

    static getCurrentDay(): string {
        return this.days[new Date().getDay() - 1];
    }
}