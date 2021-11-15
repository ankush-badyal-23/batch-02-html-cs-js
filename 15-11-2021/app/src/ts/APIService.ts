import {TCovidData} from './types/CovidData';
export class APIService {
  private readonly COVID_DATA =
    "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/";
  private readonly COVID_NEWS =
    "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0";
  private readonly COVID_VACCINE_DATA =
    "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-vaccines";
  private readonly headers = new Headers({
    "x-rapidapi-host":
      "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
    "x-rapidapi-key": "46184cc6cfmsh8158e5a64c009fap162410jsna2ba68136244",
  });
  private readonly methid = "GET";

  public getCovidData(): Promise<TCovidData[]> {
    return this.getData(this.COVID_DATA);
  }

  public getCovidNews(): Promise<any> {
    return this.getData(this.COVID_NEWS);
  }

  public getCovidVaccineData(): Promise<any> {
    return this.getData(this.COVID_VACCINE_DATA);
  }

  protected async getData(url: string): Promise<any> {
    const response = await fetch(url, {
      method: this.methid,
      headers: this.headers,
    });
    return response.json();
  }
}
