const MovieDatabase = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [sortConfig, setSortConfig] = React.useState({ key: null, direction: 'ascending' });

  const movies = [
  {
    "title": "Violent Cop",
    "country": "Japan",
    "category": "Action",
    "theme": "Yakuza",
    "imdb": "7.2",
    "myRating": "",
    "tags": "Takeshi breakout film",
    "year": "1989",
    "channel": "Prime IMDB"
  },
  {
    "title": "Sonatine",
    "country": "Japan",
    "category": "Action, Comedy",
    "theme": "Yakuza",
    "imdb": "7.5",
    "myRating": "*****",
    "tags": "classic beat takeshi, yakuza, black comedy",
    "year": "1993",
    "channel": ""
  },
  {
    "title": "Fireworks",
    "country": "Japan",
    "category": "Action",
    "theme": "Yakuza",
    "imdb": "7.8",
    "myRating": "****",
    "tags": "classic beat takeshi, inspiration for Tarantino",
    "year": "1997",
    "channel": "Prime IMDB"
  },
  {
    "title": "Audition",
    "country": "Japan",
    "category": "",
    "theme": "",
    "imdb": "7.2",
    "myRating": "*****",
    "tags": "",
    "year": "1999",
    "channel": ""
  },
  {
    "title": "Battle Royale",
    "country": "Japan",
    "category": "Action",
    "theme": "Horror",
    "imdb": "7.6",
    "myRating": "*****",
    "tags": "inspiration for Tarantino, extreme killing as game,",
    "year": "2000",
    "channel": ""
  },
  {
    "title": "Brother",
    "country": "Japan",
    "category": "Action",
    "theme": "Yakuza",
    "imdb": "7.1",
    "myRating": "",
    "tags": "Takeshi's only US film",
    "year": "2000",
    "channel": "Prime Rental"
  },
  {
    "title": "Ichi the Killer DNF",
    "country": "Korea",
    "category": "Action",
    "theme": "Revenge",
    "imdb": "7",
    "myRating": "*****",
    "tags": "extreme, gore, obscene, surreal, inspiration for Tarantino",
    "year": "2001",
    "channel": "Prime"
  },
  {
    "title": "Visitor Q",
    "country": "Japan",
    "category": "",
    "theme": "",
    "imdb": "6.6",
    "myRating": "",
    "tags": "",
    "year": "2001",
    "channel": ""
  },
  {
    "title": "Sympathy for Mr Vengeance",
    "country": "Korea",
    "category": "",
    "theme": "",
    "imdb": "7.6",
    "myRating": "****",
    "tags": "",
    "year": "2002",
    "channel": "Prime Cohen Media"
  },
  {
    "title": "Memories of Murder",
    "country": "Korea",
    "category": "Action",
    "theme": "Mystery",
    "imdb": "8.1",
    "myRating": "****",
    "tags": "Police incompetence, black comedy, quirky, landscapes, mystery, serial killer,  Coen Bros",
    "year": "2003",
    "channel": "Prime Rental"
  },
  {
    "title": "Oldboy",
    "country": "Korea",
    "category": "Action",
    "theme": "Revenge",
    "imdb": "8.4",
    "myRating": "*****",
    "tags": "Classic, Surreal, Revenge, Trick, Temporality, Memory, Symbolic, Historical, Family, Taboo, Knives, inspiration for Tarantino",
    "year": "2003",
    "channel": "Prime"
  },
  {
    "title": "A Tale of Two Sisters",
    "country": "Korea",
    "category": "",
    "theme": "",
    "imdb": "7.2",
    "myRating": "",
    "tags": "",
    "year": "2003",
    "channel": "Prime Horror TV"
  },
  {
    "title": "Tae Guk Gi",
    "country": "Korea",
    "category": "Action",
    "theme": "War",
    "imdb": "8",
    "myRating": "",
    "tags": "historical, Japan Korea, war, battle scenes",
    "year": "2004",
    "channel": ""
  },
  {
    "title": "Lady Vengeance",
    "country": "Korea",
    "category": "",
    "theme": "",
    "imdb": "7.6",
    "myRating": "****",
    "tags": "",
    "year": "2005",
    "channel": "tubi.tv"
  },
  {
    "title": "A Bittersweet Life",
    "country": "Korea",
    "category": "Action",
    "theme": "",
    "imdb": "7.5",
    "myRating": "",
    "tags": "DNF - poor quality streaming",
    "year": "2005",
    "channel": "Prime IMDB SD"
  },
  {
    "title": "The Host",
    "country": "Korea",
    "category": "Monster",
    "theme": "",
    "imdb": "7.1",
    "myRating": "****",
    "tags": "monster, city, terror, fantastical",
    "year": "2006",
    "channel": "Prime"
  },
  {
    "title": "The Chaser",
    "country": "Korea",
    "category": "Action",
    "theme": "Revenge",
    "imdb": "7.8",
    "myRating": "*****",
    "tags": "Vendetta, Serial Killer, Revenge, Protection, Social Relations, Noir, knives, fighting, proximity, voyeurism, obscene, classic, hammer, Gritty",
    "year": "2008",
    "channel": "Prime AMC, Youtube rent HD $3.99"
  },
  {
    "title": "Mother",
    "country": "Korea",
    "category": "",
    "theme": "",
    "imdb": "7.8",
    "myRating": "****",
    "tags": "Gritty, Early, Family",
    "year": "2009",
    "channel": "Prime Rental"
  },
  {
    "title": "The Yellow Sea",
    "country": "Korea",
    "category": "Action",
    "theme": "Pursuit Thriller",
    "imdb": "7.3",
    "myRating": "*****",
    "tags": "Gritty, Early, extreme car sequences, Random Encounter, Chase, mirrored betrayals, dual chases, axe fights, kinetic action",
    "year": "2010",
    "channel": "Prime Rental"
  },
  {
    "title": "The Man From Nowhere",
    "country": "Japan",
    "category": "Action",
    "theme": "Revenge",
    "imdb": "7.8",
    "myRating": "****",
    "tags": "Revenge, Stranger - girl, Protection, Knives, Fighting, Martial Arts, choreography, noir, hunt, hero",
    "year": "2010",
    "channel": "Prime Rental"
  },
  {
    "title": "I Saw the Devil",
    "country": "Korea",
    "category": "Action",
    "theme": "Revenge",
    "imdb": "7.8",
    "myRating": "*****",
    "tags": "Gore, Grotesque, torture, obscene, car chase, pursuit, conflict pair, inevitability, evil",
    "year": "2010",
    "channel": "Prime Rental"
  },
  {
    "title": "The Unjust",
    "country": "Korea",
    "category": "Action",
    "theme": "Revenge",
    "imdb": "6.7",
    "myRating": "****",
    "tags": "Parallelism, cops, politics, justice, symmetry, guns, deception,",
    "year": "2010",
    "channel": "Netflix"
  },
  {
    "title": "The Outrage",
    "country": "Japan",
    "category": "Action",
    "theme": "",
    "imdb": "6.8",
    "myRating": "",
    "tags": "",
    "year": "2010",
    "channel": ""
  },
  {
    "title": "Confession of Murder",
    "country": "Korea",
    "category": "Action",
    "theme": "Mystery",
    "imdb": "7.1",
    "myRating": "****",
    "tags": "whodunnit, mystery, social relations - media & murder, serial killer, car chase, knives, social commentary, noir, fighting",
    "year": "2012",
    "channel": "Prime HiYah"
  },
  {
    "title": "A Company Man",
    "country": "Korea",
    "category": "Action",
    "theme": "",
    "imdb": "6.7",
    "myRating": "",
    "tags": "DNF",
    "year": "2012",
    "channel": "Prime IMDB"
  },
  {
    "title": "Nameless Gangster",
    "country": "Korea",
    "category": "Action",
    "theme": "",
    "imdb": "7.1",
    "myRating": "",
    "tags": "",
    "year": "2012",
    "channel": "Prime Rental"
  },
  {
    "title": "Beyond Outrage",
    "country": "Japan",
    "category": "",
    "theme": "Yakuza",
    "imdb": "6.8",
    "myRating": "",
    "tags": "",
    "year": "2012",
    "channel": ""
  },
  {
    "title": "The Suspect",
    "country": "Korea",
    "category": "Action",
    "theme": "Revenge",
    "imdb": "6.9",
    "myRating": "****",
    "tags": "parallelism, espionage, N-S Korea, Father Wife Daughter, Betrayal, Spycraft, secret file, double agent, car chase, surveillance, martial arts, vendetta, guns, bullet ballet, choreography, Bourne, Mission Impossible, excessive cuts, too kinetic, excessive camera shake,",
    "year": "2013",
    "channel": "Prime IMDB"
  },
  {
    "title": "New World",
    "country": "Korea",
    "category": "Action",
    "theme": "Revenge",
    "imdb": "7.6",
    "myRating": "****",
    "tags": "Cops, Corruption, Gangs, Hierarchy, Clever",
    "year": "2013",
    "channel": "Prime HiYah"
  },
  {
    "title": "No Tears for the Dead",
    "country": "Korea",
    "category": "Action",
    "theme": "",
    "imdb": "6.8",
    "myRating": "",
    "tags": "DNF",
    "year": "2014",
    "channel": "Prime"
  },
  {
    "title": "A Hard Day",
    "country": "Korea",
    "category": "Black Comedy",
    "theme": "",
    "imdb": "7.2",
    "myRating": "",
    "tags": "Endless Errors, Cover Ups, Cops, Incompetence, Bad Luck, Series, Karma, Fiasco, Elements of Caper, Corruption, Chase, Parallelism, Twists, arch nemesis, unexpected bounty, duel",
    "year": "2014",
    "channel": "Prime Rental"
  },
  {
    "title": "Veteran",
    "country": "Korea",
    "category": "Action",
    "theme": "Revenge",
    "imdb": "7",
    "myRating": "***",
    "tags": "Fighting, Choreography, guns, vengeance, payback,",
    "year": "2015",
    "channel": "Netflix"
  },
  {
    "title": "The Wailing",
    "country": "Korea",
    "category": "Horror",
    "theme": "Mystery",
    "imdb": "7.5",
    "myRating": "****",
    "tags": "Possession, Horror, Spirits, Ceremonies, Police Incompetence, Gore, Twists, Inevitability,",
    "year": "2016",
    "channel": "Netflix"
  },
  {
    "title": "Train to Busan",
    "country": "Korea",
    "category": "Action",
    "theme": "Zombie",
    "imdb": "7.6",
    "myRating": "",
    "tags": "Zombies, Pursuit, Evasion, Escape, Clever, Technique, Gore, Horror, Zombies, Twists, Technique",
    "year": "2016",
    "channel": "Prime"
  },
  {
    "title": "Pandora",
    "country": "Korea",
    "category": "",
    "theme": "",
    "imdb": "6.7",
    "myRating": "",
    "tags": "DNF",
    "year": "2016",
    "channel": "Netflix"
  },
  {
    "title": "The Handmaiden (Korean)",
    "country": "Korea",
    "category": "",
    "theme": "",
    "imdb": "8.1",
    "myRating": "",
    "tags": "DNF",
    "year": "2016",
    "channel": "Prime"
  },
  {
    "title": "Asura: The City of Madness",
    "country": "Korea",
    "category": "Action",
    "theme": "Revenge",
    "imdb": "6.7",
    "myRating": "****",
    "tags": "Drugs, Cars, Guns, Knives, Aesthetics of Close Conflict, Chase, Inevitability, Duel, arch nemsis",
    "year": "2016",
    "channel": "Prime Rental"
  },
  {
    "title": "Forgotten",
    "country": "Korea",
    "category": "Action",
    "theme": "Mystery",
    "imdb": "7.5",
    "myRating": "****",
    "tags": "Mystery, Whodunnit, Memory, Flashbacks, Gimmickry, Brothers, Son Parents, Knives",
    "year": "2017",
    "channel": "Netflix"
  },
  {
    "title": "Steel Rain",
    "country": "Korea",
    "category": "Action",
    "theme": "Political",
    "imdb": "7.1",
    "myRating": "****",
    "tags": "surveillance, espionage, north south, spycraft, family as proxy national relations",
    "year": "2017",
    "channel": "Netflix"
  },
  {
    "title": "The Outlaws",
    "country": "Korea",
    "category": "",
    "theme": "",
    "imdb": "7.2",
    "myRating": "",
    "tags": "DNF - note: The Roundup is follow up, Netflix",
    "year": "2017",
    "channel": "Prime Rental"
  },
  {
    "title": "A Taxi Driver",
    "country": "Korea",
    "category": "Comedy",
    "theme": "Historical",
    "imdb": "7.9",
    "myRating": "",
    "tags": "",
    "year": "2017",
    "channel": "Prime"
  },
  {
    "title": "The Gangster, The Cop, The Devil",
    "country": "Korea",
    "category": "Action",
    "theme": "Revenge",
    "imdb": "6.9",
    "myRating": "****",
    "tags": "Gangs, Knives, obscene, fighting, revenge, loyalty, inevitability, justice, prison, law, cops",
    "year": "2019",
    "channel": "Prime HiYah"
  },
  {
    "title": "Parasite",
    "country": "Korea",
    "category": "Black Comedy",
    "theme": "quirky",
    "imdb": "8.6",
    "myRating": "*****",
    "tags": "Absurd, Black Comedy, knives, class conflict, social relations, surveillance, stratagems",
    "year": "2019",
    "channel": "Hulu"
  },
  {
    "title": "Deliver Us from Evil",
    "country": "Korea",
    "category": "Action",
    "theme": "Revenge",
    "imdb": "6.8",
    "myRating": "****",
    "tags": "Thailand, Child Kidnapping, Rescue, Action, Thriller, Guns",
    "year": "2020",
    "channel": "Prime HiYah"
  },
  {
    "title": "The Call",
    "country": "Korea",
    "category": "Horror",
    "theme": "Mystery",
    "imdb": "7.1",
    "myRating": "****",
    "tags": "Gimmicks, Future-Past, Female Protagonist, Evil, Possession, Horror, Supernatural, Knives, Technique, Inventiveness",
    "year": "2020",
    "channel": "Netflix"
  },
  {
    "title": "Beasts Clawing at Straws",
    "country": "Korea",
    "category": "Action",
    "theme": "Revenge",
    "imdb": "7.1",
    "myRating": "****",
    "tags": "Knives, Fighting, Pursuit, Gimmick, Money, Clever, camerawork, Tarantino, Coen Bros, circularity/return, repetition, doubling, tattoo-sign, surveillance, corruption, bounty",
    "year": "2020",
    "channel": "Prime Rental"
  },
  {
    "title": "Night in Paradise - netflix",
    "country": "Korea",
    "category": "Action",
    "theme": "",
    "imdb": "6.7",
    "myRating": "***",
    "tags": "Romance, Parallelism, Guns, total death, love pact, self-sacrifice-redemption, tragedy, style",
    "year": "2020",
    "channel": "Netflix"
  },
  {
    "title": "A Family\u00a0 (Yakuza and the Family)",
    "country": "Japan",
    "category": "Action",
    "theme": "Revenge",
    "imdb": "7",
    "myRating": "***",
    "tags": "Yakuza, Nostalgia, Revenge, Romance, Masculinity, Father Son, Death, corruption, generational gap, redemption, tragedy, style",
    "year": "2020",
    "channel": "Netflix"
  },
  {
    "title": "Raging Fire",
    "country": "Hong Kong",
    "category": "Action",
    "theme": "Revenge",
    "imdb": "6.8",
    "myRating": "***",
    "tags": "martial arts, brotherhood, betrayal, loyalty, vendetta, guns, car chase, fighting, martial arts, choreography",
    "year": "2021",
    "channel": "Prime HiYah"
  },
  {
    "title": "The Medium (Thai: Rangjong)",
    "country": "Korea",
    "category": "Horror",
    "theme": "",
    "imdb": "6.7",
    "myRating": "****",
    "tags": "Thailand, Possession, Spirits, Ceremonies, Documentary, Gore, Cannibalism, Mockumentary, Twists, Realism, Technique",
    "year": "2021",
    "channel": "Netflix"
  },
  {
    "title": "Escape from Mogadishu",
    "country": "Korea",
    "category": "Action",
    "theme": "",
    "imdb": "7.2",
    "myRating": "****",
    "tags": "N-S Korea, international, conflict resolution, car chase, guns, personal relations, political dimensions, morality, surveillance",
    "year": "2021",
    "channel": "Prime Rental"
  },
  {
    "title": "The Drug King",
    "country": "Korea",
    "category": "Action",
    "theme": "Drug Kingpin",
    "imdb": "6.2",
    "myRating": "",
    "tags": "ABANDONED - not gripping start",
    "year": "2018",
    "channel": "Netflix"
  },
  {
    "title": "Time to Hunt",
    "country": "Korea",
    "category": "Action",
    "theme": "Dystopia",
    "imdb": "6.3",
    "myRating": "",
    "tags": "ABANDONED - seemed for teens",
    "year": "2020",
    "channel": "Netflix"
  },
  {
    "title": "Svaha: The Sixth Finger",
    "country": "Korea",
    "category": "Suspense",
    "theme": "Supernatural",
    "imdb": "6.3",
    "myRating": "****",
    "tags": "stylish, spiritual, religious, duel, redemption, good/evil, trickery, possession, direct confrontation, detective mystery, puzzle",
    "year": "2019",
    "channel": "Netflix"
  },
  {
    "title": "Infernal Affairs",
    "country": "Hong Kong",
    "category": "Crime",
    "theme": "",
    "imdb": "",
    "myRating": "*****",
    "tags": "inspiration for The Departed",
    "year": "",
    "channel": ""
  },
  {
    "title": "Infernal Affairs II",
    "country": "Hong Kong",
    "category": "Crime",
    "theme": "",
    "imdb": "",
    "myRating": "****",
    "tags": "",
    "year": "",
    "channel": ""
  },
  {
    "title": "Beyond Evil",
    "country": "Korea",
    "category": "Suspense",
    "theme": "Forensic Detective",
    "imdb": "8.1",
    "myRating": "",
    "tags": "",
    "year": "2021",
    "channel": "Netflix"
  },
  {
    "title": "The Man Standing Next",
    "country": "Korea",
    "category": "Thriller",
    "theme": "Assassination",
    "imdb": "7",
    "myRating": "",
    "tags": "",
    "year": "2020",
    "channel": "Prime Rent or Freevee"
  },
  {
    "title": "The Glory",
    "country": "Korea",
    "category": "Suspense",
    "theme": "Revenge",
    "imdb": "",
    "myRating": "****",
    "tags": "",
    "year": "",
    "channel": ""
  }  
];

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortedMovies = () => {
    const sortedMovies = [...movies].sort((a, b) => {
      if (sortConfig.key === 'year' || sortConfig.key === 'imdb') {
        return sortConfig.direction === 'ascending' 
          ? parseFloat(a[sortConfig.key]) - parseFloat(b[sortConfig.key])
          : parseFloat(b[sortConfig.key]) - parseFloat(a[sortConfig.key]);
      }

      if (sortConfig.key === 'myRating') {
        const ratingOrder = { '*****': 5, '****': 4, '***': 3, '**': 2, '*': 1, '': 0 };
        return sortConfig.direction === 'ascending'
          ? ratingOrder[a[sortConfig.key]] - ratingOrder[b[sortConfig.key]]
          : ratingOrder[b[sortConfig.key]] - ratingOrder[a[sortConfig.key]];
      }

      return sortConfig.direction === 'ascending'
        ? (a[sortConfig.key] || '').localeCompare(b[sortConfig.key] || '')
        : (b[sortConfig.key] || '').localeCompare(a[sortConfig.key] || '');
    });

    return sortedMovies.filter(movie =>
      Object.values(movie).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Asian Cinema Database</h1>
        <h2 className="text-xl text-center text-gray-600 mb-6">Films from Korea, Japan, and Hong Kong</h2>
        
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search movies..."
            className="w-full p-2 border border-gray-300 rounded"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                {/* ... table headers ... */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {getSortedMovies().map((movie, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm font-medium text-gray-900">{movie.title}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{movie.year}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{movie.country}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{movie.category}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{movie.imdb}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{movie.myRating}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 max-w-md">{movie.tags}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{movie.channel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<MovieDatabase />, document.getElementById('root'));
