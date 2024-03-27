import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { news } from './mynews';
@Injectable({
  providedIn: 'root'
})
export class WebapiService implements InMemoryDbService {
  createDb() {
    const mynews = [
      {
        id: 1,
        titles: "Yodhaaa",
        description: "An Aeroplane hijack where a soldier helps the passenger and fight against the terrorist. But the damage to the flight engine made it very tough to survive the situation.",
        cateogry: "bollywood",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id: 2,
        titles: "Shaitaan",
        description:"Shaitaan unfolds as an edge-of-the-seat supernatural thriller, taking viewers on a rollercoaster ride of emotions and suspense from start to finish. ",
        cateogry: "bollywood",
        publictiondate: "28 / 2 / 24",
        author:"abc"
      },
      {
        id: 3,
        titles: "Article 370",
        description: "Article 370 movie is based on the political event of revocation of the Indian Constitutional article by the Centre, which gave special status to the erstwhile state of Jammu and Kashmir. ",
        cateogry: "bollywood",
        publictiondate: "25 / 2 / 24",
        author:"abc"
      },
      {
        id: 4,
        titles: "Fighter",
        description: "Fighter is a 2024 Indian Hindi-language action film directed by Siddharth Anand, based on a story he wrote with Ramon Chibb. ",
        cateogry: "bollywood",
        publictiondate: "23 / 3 / 24",
        author:"abc"
      },
      {
        id: 5,
        titles: "Teri-Baaton Mein Aisa Uljha liya",
        description: "Teri Baaton Mein Aisa Uljha Jiya is a 2024 Indian Hindi-language science fiction romantic comedy starring Shahid Kapoor and Kriti Sanon.",
        cateogry: "bollywood",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id:6,
        titles:"As Dhoni passes the baton again, CSK say they are better prepared",
        description:"In 2022, MSD decided to relinquish captaincy and let Ravindra Jadeja take charge. After only two wins in eight games, Jadeja stepped down",
        cateogry:"sports",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id:7,
        titles:"Andy Murray Beats Dizzy Matteo Berrettini; Sloane Stephens, Naomi Osaka advance",
        description:"Two-time Miami Open champion Andy Murray fought back for a 4-6, 6-3, 6-4 win over struggling Italian Matteo Berrettini in the first round at Hard Rock Stadium on Wednesday. Berrettini needed medical attention near the end of the second set after appearing to almost faint on court but he battled on. The Italian recently returned to the tour after an injury-plagued 2023, reaching the final of a Challenger event in Phoenix. He broke Murray's serve in the first game of the match and was in firm control of the opening set.",
        cateogry:"sports",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id:8,
        titles:"Court Rules Robinho Must Serve Gang Rape Sentence In Brazil",
        description:"The court ruled by nine votes to two in favor of an Italian request that Robinho serve his sentence in his home country after he was found guilty of taking part in the gang rape of an Albanian woman",
        cateogry:"sports",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id:9,
        titles:"Avani Prashanth Finishes 10th As Chinese Taipei Golfer Is Crowned Champion",
        description:"India's Avani Prashanth registered her fourth straight under par round with a one-under 71 to sign off tied 10th, her best finish in the Women's Amateur Asia-Pacific Championships",
        cateogry:"sports",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id:10,
        titles:"PV Sindhu, Kidambi Srikanth, Lakshya Sen Progress To Second Round Of Swiss Open",
        description:"PV Sindhu, Lakshya Sen and Kidambi Srikanth produced impressive performances to progress to the second round of the Swiss Open super 300 badminton tournament.",
        cateogry:"sports",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id:11,
        titles:"Arvind Kejriwal Arrested | First Visuals Of Kejriwal After Arrest | CM Kejriwal Reaches ED Office",
        description:"Delhi CM Arvind Kejriwal arrives at the ED Headquarters after Enforcement Directorate team arrested him in the Excise Policy Case.",
        cateogry:"politics",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id:12,
        titles:"Centre's 'fact-checking unit' notification stayed by Supreme Court",
        description:"The Supreme Court on Thursday stayed a government notification of March 20 establishing a fact-checking unit to verify news items appearing in the media about the government.",
        cateogry:"politics",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id:13,
        titles:"SC rejects plea for stay on appointment of new election commissioners",
        description:"The Supreme Court on Thursday dismissed applications seeking a stay on the appointment of two new election commissioners, saying it would lead to chaos and uncertainty as the elections are round the corner.",
        cateogry:"politics",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id:14,
        titles:"Long Weekend: Airfares, hotel rates shoot up ahead of Holi, Good Friday",
        description:"As March draws to a close, two consecutive long weekend opportunities – Holi and Good Friday – are driving up hotel occupancy and airfares across major routes.",
        cateogry:"politics",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id:15,
        titles:"SBI submits all electoral bond details, including unique numbers, to ECI",
        description:"The State Bank of India (SBI), through its Chairman Dinesh Kumar Khara, told the Supreme Court on Thursday that it has submitted complete details of electoral bonds, including the ‘unique alpha-numeric’ details of bonds, to the Election Commission of India (ECI).",
        cateogry:"politics",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      }
    ]
    return {mynews};
  }
  genId(mynews:news[]):number{
    return mynews.length>0?Math.max(...mynews.map(news=>news.id))+1:1;
  }
}