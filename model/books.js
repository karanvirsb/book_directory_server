const books = [
    {
        id: "bpuKtO1E36",
        image: function () {
            return `http://localhost:8000/api/books/image/${this.id}`;
        },
        title: " Big Shot (Diary of a Wimpy Kid Book 16) ",
        author: ["Jeff Kinney"],
        date_info: " Hardcover - Oct. 26 2021 ",
        publisher: "Harry N. Abrams (Oct. 26 2021)",
        language: "English",
        pages: "224",
        description:
            " An instant #1USA Today,Wall Street Journal, andNew York Times bestseller! In Big Shot, book 16 of the Diary of a Wimpy Kid series from #1 international bestselling author Jeff Kinney, Greg Heffley and sports just dont mix. After a disastrous field day competition at school, Greg decides that when it comes to his athletic career, hes officially retired. But after his mom urges him to give sports one more chance, he reluctantly agrees to sign up for basketball. Tryouts are a mess, and Greg is sure he wont make the cut. But he unexpectedly lands a spot on the worst team. As Greg and his new teammates start the season, their chances of winning even a single game look slim. But in sports, anything can happen. When everything is on the line and the ball is in Gregs hands, will he rise to the occasion? Or will he blow his big shot? See the Wimpy Kid World in a whole new way with the help of Greg Heffleys best friend in the instant #1 bestsellers Diary of an Awesome Friendly Kid: Rowley Jeffersons Journal, Rowley Jeffersons Awesome Friendly Adventure, and Rowley Jeffersons Awesome Friendly Spooky Stories!  ",
        category: "kids",
    },
    {
        id: "DbwTZlBCBi",
        image: function () {
            return `http://localhost:8000/api/books/image/${this.id}`;
        },
        title: " Out of My Heart ",
        author: ["Sharon M. Draper"],
        date_info: " Hardcover - Nov. 9 2021 ",
        publisher: "Atheneum/Caitlyn Dlouhy Books (Nov. 9 2021)",
        language: "English",
        pages: "352",
        description:
            " Melody faces her fears to follow her passion in this stunning sequel to the acclaimed, New York Times bestselling middle grade novel Out of My Mind.Melody, the huge-hearted heroine of Out of My Mind, is a year older, and a year braver. And now with her Medi-talker, she feels nothings out of her reach, not even summer camp. There have to be camps for differently-abled kids like her, and shes going to sleuth one out. A place where she can trek through a forest, fly on a zip line, and even ride on a horse! A place where maybe she really can finally make a real friend, make her own decisions, and even do things on her ownthe dream!  By the light of flickering campfires and the power of thunderstorms, through the terror of unexpected creatures in cabins and the first sparkle of a crush, Melodys about to discover how brave and strong she really is.  ",
        category: "kids",
    },
    {
        id: "Nit7fcSGPU",
        image: function () {
            return `http://localhost:8000/api/books/image/${this.id}`;
        },
        title: " Daughter of the Deep ",
        author: ["Rick Riordan"],
        date_info: " Hardcover - Oct. 26 2021 ",
        publisher: "Disney-Hyperion (Oct. 26 2021)",
        language: "English",
        pages: "352",
        description:
            " New York Times #1 best-selling author Rick Riordan pays homage to Jules Verne in his exciting modern take on 20,000 Leagues Under the Sea.If you have ever craved a story that will leave your heart racing",
        category: "kids",
    },
    {
        id: "Pb940VmDNn",
        image: function () {
            return `http://localhost:8000/api/books/image/${this.id}`;
        },
        title: " Ground Zero ",
        author: ["Alan Gratz"],
        date_info: " Hardcover - Feb. 2 2021 ",
        publisher: "Scholastic Press (Feb. 2 2021)",
        language: "English",
        pages: "336",
        description:
            " The instant #1 New York Times bestseller.In time for the twentieth anniversary of 9/11, master storyteller Alan Gratz (Refugee) delivers a pulse-pounding and unforgettable take on history and hope, revenge and fear -- and the stunning links between the past and present.September 11, 2001, New York City: Brandon is visiting his dad at work, on the 107th floor of the World Trade Center. Out of nowhere, an airplane slams into the tower, creating a fiery nightmare of terror and confusion. And Brandon is in the middle of it all. Can he survive -- and escape?September 11, 2019, Afghanistan: Reshmina has grown up in the shadow of war, but she dreams of peace and progress. When a battle erupts in her village, Reshmina stumbles upon a wounded American soldier named Taz. Should she help Taz -- and put herself and her family in mortal danger?Two kids. One devastating day. Nothing will ever be the same.  ",
        category: "kids",
    },
    {
        id: "nEad7Xme80",
        image: function () {
            return `http://localhost:8000/api/books/image/${this.id}`;
        },
        title: " Starfish ",
        author: ["Lisa Fipps"],
        date_info: " Hardcover - March 9 2021 ",
        publisher: "Nancy Paulsen Books (March 9 2021)",
        language: "English",
        pages: "256",
        description:
            " A Printz Honor winner!Ellie is tired of being fat-shamed and does something about it in this poignant debut novel-in-verse.Cover may vary.Ever since Ellie wore a whale swimsuit and made a big splash at her fifth birthday party, she's been bullied about her weight. To cope, she tries to live by the Fat Girl Ruleslike no making waves",
        category: "kids",
    },
    {
        id: "R7og16MKS8",
        image: function () {
            return `http://localhost:8000/api/books/image/${this.id}`;
        },
        title: " Willodeen ",
        author: ["Katherine Applegate", "Charles Santoso"],
        date_info: " Hardcover - Sept. 7 2021 ",
        publisher: "Feiwel & Friends (Sept. 7 2021)",
        language: "English",
        pages: "272",
        description:
            " From #1 New York Times bestseller Katherine Applegate, a singular middle-grade novel about a girl who risks everything to help a handmade creature who comes to life.The earth is old and we are not, and that is all you must remember . . .Eleven-year-old Willodeen adores creatures of all kinds, but her favorites are the most unlovable beasts in the land: strange beasts known as screechers. The villagers of Perchance call them pests, even monsters, but Willodeen believes the animals serve a vital role in the complicated web of nature.Lately, though, nature has seemed angry indeed. Perchance has been cursed with fires and mudslides, droughts and fevers, and even the annual migration of hummingbears, a source of local pride and income, has dwindled. For as long as anyone can remember, the tiny animals have overwintered in shimmering bubble nests perched atop blue willow trees, drawing tourists from far and wide. This year, however, not a single hummingbear has returned to Perchance, and no one knows why.When a handmade birthday gift brings unexpected magic to Willodeen and her new friend, Connor, she's determined to speak up for the animals she loves, and perhaps even uncover the answer to the mystery of the missing hummingbears.A timely and timeless tale about our fragile earth, and one girls fierce determination to make a difference.  ",
        category: "kids",
    },
    {
        id: "QXQO6Fxsxe",
        image: function () {
            return `http://localhost:8000/api/books/image/${this.id}`;
        },
        title: " Pony ",
        author: ["R. J. Palacio"],
        date_info: " Hardcover - Deckle Edge, Sept. 28 2021 ",
        publisher: "Knopf Books for Young Readers (Sept. 28 2021)",
        language: "English",
        pages: "304",
        description:
            " INSTANT NEW YORK TIMES BESTSELLER - NAMED ONE OF THE BEST CHILDRENS BOOKS OF THE YEAR BY THE WALL STREET JOURNAL Perfection. - The Wall Street Journal The bestselling author of Wonder returns with an enthralling adventure about a boy on a quest to rescue his father, with only a ghost as his companion and a mysterious pony as his guide. Twelve-year-old Silas is awoken in the dead of night by three menacing horsemen who take his father away. Silas is left shaken, scared, and alone, except for the presence of his companion, Mittenwool . . . who happens to be a ghost. When a pony shows up at his door, Silas makes the courageous decision to leave his home and embark on a perilous journey to find his father. Along the way, he will face his fears to unlock the secrets of his past and explore the unfathomable mysteries of the world around him.R. J. Palacio spins a harrowing yet distinctly beautiful coming-of-age story about the power of love and the ties that bind us across distance and time. With the poignant depth of War Horse and the singular voice of True Grit, this is one of those rare books poised to become an instant classic for readers of all ages.A wonderful story of courage. ... It's got the feeling of a modern classic as recommended on NPR by Jorge Lacera  ",
        category: "kids",
    },
    {
        id: "a60HwKkFKR",
        image: function () {
            return `http://localhost:8000/api/books/image/${this.id}`;
        },
        title: " Amari and the Night Brothers ",
        author: ["B. B. Alston"],
        date_info: " Hardcover - Jan. 19 2021 ",
        publisher: "Balzer + Bray (Jan. 19 2021)",
        language: "English",
        pages: "416",
        description:
            " New York Times bestseller! Artemis Fowl meets Men in Black in this exhilarating debut middle grade fantasy, the first in a trilogy filled with #blackgirlmagic. Perfect for fans of Tristan Strong Punches a Hole in the Sky, the Percy Jackson series, and Nevermoor. Amari Peters has never stopped believing her missing brother, Quinton, is alive. Not even when the police told her otherwise, or when she got in trouble for standing up to bullies who said he was gone for good.So when she finds a ticking briefcase in his closet, containing a nomination for a summer tryout at the Bureau of Supernatural Affairs, shes certain the secretive organization holds the key to locating Quintonif only she can wrap her head around the idea of magicians, fairies, aliens, and other supernatural creatures all being real.Now she must compete for a spot against kids whove known about magic their whole lives. No matter how hard she tries, Amari cant seem to escape their intense doubt and scrutinyespecially once her supernaturally enhanced talent is deemed illegal. - With an evil magician threatening the supernatural world, and her own classmates thinking shes an enemy, Amari has never felt more alone. But if she doesnt stick it out and pass the tryouts, she may never find out what happened to Quinton.Plus don't miss the thrilling sequel, Amari and the Great Game!  ",
        category: "kids",
    },
    {
        id: "Lxzmfh52Rl",
        image: function () {
            return `http://localhost:8000/api/books/image/${this.id}`;
        },
        title: " The Beatryce Prophecy ",
        author: ["Kate DiCamillo", "Sophie Blackall"],
        date_info: " Hardcover - Sept. 28 2021 ",
        publisher: "Candlewick (Sept. 28 2021)",
        language: "English",
        pages: "256",
        description:
            " A 2021 People Magazine Best Books of Fall Winner!From two-time Newbery Medalist Kate DiCamillo and two-time Caldecott Medalist Sophie Blackall comes a fantastical meditation on fate, love, and the power of words to spell the world.We shall all, in the end, be led to where we belong. We shall all, in the end, find our way home.In a time of war, a mysterious child appears at the monastery of the Order of the Chronicles of Sorrowing. Gentle Brother Edik finds the girl, Beatryce, curled in a stall, wracked with fever, coated in dirt and blood, and holding fast to the ear of Answelica the goat. As the monk nurses Beatryce to health, he uncovers her dangerous secret, one that imperils them allfor the king of the land seeks just such a girl, and Brother Edik, who penned the prophecy himself, knows why.  And so it is that a girl with a head full of storiespowerful tales-within-the-tale of queens and kings, mermaids and wolvesventures into a dark wood in search of the castle of one who wishes her dead. But Beatryce knows that, should she lose her way, those who love hera wild-eyed monk, a man who had once been king, a boy with a terrible sword, and a goat with a head as hard as stonewill never give up searching for her, and to know this is to know everything. With its timeless themes, unforgettable cast, and magical medieval setting, Kate DiCamillos lyrical tale, paired with resonant black-and-white illustrations by Caldecott Medalist Sophie Blackall, is a true collaboration between masters.  ",
        category: "kids",
    },
    {
        id: "78eM7xhsmg",
        image: function () {
            return `http://localhost:8000/api/books/image/${this.id}`;
        },
        title: " Black Boy Joy: 17 Stories Celebrating Black Boyhood ",
        author: ["Kwame Mbalia"],
        date_info: " Hardcover - Aug. 3 2021 ",
        publisher: "Delacorte Press (Aug. 3 2021)",
        language: "English",
        pages: "320",
        description:
            " THE INSTANT #1 NEW YORK TIMES BESTSELLER  FIVE STARRED REVIEWSGive your graduate the gift of joy! Celebrate Black boyhood at every stage with stories from seventeen bestselling, critically acclaimed Black authorsincluding Jason Reynolds, Jerry Craft, and Kwame Mbalia.?Pick up Black Boy Joy for a heavy dose of happiness. Booklist",
        category: "kids",
    },
    {
        id: "5VkULqqYOk",
        image: function () {
            return `http://localhost:8000/api/books/image/${this.id}`;
        },
        title: " The Elephant in the Room ",
        author: ["Holly Goldberg Sloan"],
        date_info: " Hardcover - March 2 2021 ",
        publisher: "Dial Books (March 2 2021)",
        language: "English",
        pages: "256",
        description:
            " From theNew York Timesbestselling author ofCounting by 7scomes a heartfelt story about the importance of compassion and bravery when facing lifes challenges (Kirkus)for fans ofThe One and Only IvanandFront Desk.It's been almost a year since Sila's mother traveled halfway around the world to Turkey",
        category: "kids",
    },
    {
        id: "-a9a4y6rm6",
        image: function () {
            return `http://localhost:8000/api/books/image/${this.id}`;
        },
        title: " Paradise on Fire ",
        author: ["Jewell Parker Rhodes"],
        date_info: " Hardcover - Sept. 14 2021 ",
        publisher: "Little, Brown Books for Young Readers (Sept. 14 2021)",
        language: "English",
        pages: "256",
        description:
            " BCALA 2021 Best of the Best BookFrom award-winning and bestselling author Jewell Parker Rhodes comes a powerful coming-of-age survival tale exploring issues of race, class, and climate changeAddy is haunted by the tragic fire that killed her parents, leaving her to be raised by her grandmother. Years later, Addys grandmother has enrolled her in a summer wilderness program. There, Addy joins five other Black city kids each with their own troubles to spend a summer out west. Deep in the forest the kids learn new (and to them) strange skills: camping, hiking, rock climbing, and how to start and safely put out campfires. Most important, they learn to depend upon each other for companionship and survival.But then comes a devastating forest fire - Addy is face-to-face with her destiny and haunting past. Developing her courage and resiliency against the raging fire, its up to Addy to lead her friends to safety. Not all are saved. But remembering her origins and grandmothers teachings, shes able to use street smarts, wilderness skills, and her spiritual intuition to survive.  ",
        category: "kids",
    },
    {
        id: "ElpI1O5EGe",
        image: function () {
            return `http://localhost:8000/api/books/image/${this.id}`;
        },
        title: " City of the Plague God ",
        author: ["Sarwat Chadda"],
        date_info: " Hardcover - Jan. 12 2021 ",
        publisher: "Rick Riordan Presents (Jan. 12 2021)",
        language: "English",
        pages: "400",
        description:
            " Best-selling author Rick Riordan presents CITY OF THE PLAGUE GOD, an adventure based on ancient Mesopotamian mythology written by Sarwat Chadda, author of the Ash Mistry series.An epic worthy of Gilgamesh. Chadda brings attention to the less well-recognized mythology of ancient Mesopotamia with engaging humor and wit.--Kirkus ReviewsThirteen-year-old Sik wants a simple life going to school and helping at his parents' deli in the evenings. But all that is blown to smithereens when Nergal comes looking for him",
        category: "kids",
    },
    {
        id: "-9Q71kSNJQ",
        image: function () {
            return `http://localhost:8000/api/books/image/${this.id}`;
        },
        title: " How to Find What You're Not Looking For ",
        author: ["Veera Hiranandani"],
        date_info: " Hardcover - Sept. 14 2021 ",
        publisher: "Kokila (Sept. 14 2021)",
        language: "English",
        pages: "384",
        description:
            "\" New historical fiction from a Newbery Honor winning author about how middle schooler Ariel Goldberg's life changes when her big sister elopes following the 1967 Loving v. Virginia decision, and she's forced to grapple with both her family's prejudice and the antisemitism she experiences, as she defines her own beliefs.Cover may vary. - Twelve-year-old Ariel Goldberg's life feels like the moment after the final guest leaves the party. Her family's Jewish bakery runs into financial trouble, and her older sister has eloped with a young man from India following the Supreme Court decision that strikes down laws banning interracial marriage. As change becomes Ariel's only constant, she's left to hone something that will be with her always--her own voice.  \"",
        category: "kids",
    },
    {
        id: "j0yULEFCVH",
        image: function () {
            return `http://localhost:8000/api/books/image/${this.id}`;
        },
        title: " Just Be Cool, Jenna Sakai ",
        author: ["Debbi Michiko Florence"],
        date_info: " Hardcover - Aug. 17 2021 ",
        publisher: "Scholastic Press (Aug. 17 2021)",
        language: "English",
        pages: "304",
        description:
            " Fans of Lisa Greenwald and Wendy Mass are sure to fall head-over-heels for this funny, sweet story of crushes, competition, and the confusing reality of middle school. Heartbreak is for suckers.' -- Jenna SakaiWhen Jenna gets dumped over winter break'",
        category: "kids",
    },
    {
        id: "gzlQTjwLJc",
        image: function () {
            return `http://localhost:8000/api/books/image/${this.id}`;
        },
        title: " The Monsters of Rookhaven ",
        author: ["Padraig Kenny"],
        date_info: " Hardcover - Sept. 21 2021 ",
        publisher: "Henry Holt and Co. (BYR) (Sept. 21 2021)",
        language: "English",
        pages: "336",
        description:
            "\"A stunning book...a brand new take on the monster story. - Eoin Colfer, international bestselling author of the Artemis Fowl seriesFrom award-winning author P draig Kenny comes an action-packed middle grade fantasy about a family of monsters, perfect for fans of Jonathan Auxier and Victoria Schwab.Mirabelle is part of a very unusual family. Between Uncle Bertram transforming into a ferocious grizzly bear and Aunt Elizas body being made entirely of spiders, it's safe to say they are an extraordinary lot. To the human residents of Rookhaven Village, the family is a threat. So long ago, a treaty was reached between them?in return for sundries and supplies, the monsters won't eat the townspeople?and an invisible glamour was set around the perimeter of the Manor to keep strangers out.But the glamour serves a second purpose: to keep Mirabelle and her family hidden from those who would do them harm. When two orphans?siblings Jem and Tom?stumble upon a tear in the magical field and open a door that was meant to stay locked, Mirabelle and her family are put in grave danger. A very real monster has locked onto their scent, and he has a hunger for their kind.At turns chilling and thought-provoking, and stunningly illustrated by Edward Bettison, Padraig Kennys The Monsters of Rookhaven explores difference and empathy through the eyes of characters you won't soon forget.  \"",
        category: "kids",
    },
    {
        id: "DkTSOjAzTE",
        image: function () {
            return `http://localhost:8000/api/books/image/${this.id}`;
        },
        title: " The Outlaws Scarlett and Browne ",
        author: ["Jonathan Stroud"],
        date_info: " Hardcover - Oct. 5 2021 ",
        publisher: "Knopf Books for Young Readers (Oct. 5 2021)",
        language: "English",
        pages: "432",
        description:
            " Action! Humor! Fantasy! Kicking off a new series with a bang (several bangs)",
        category: "kids",
    },
    {
        id: "EGV5XNjS5f",
        image: function () {
            return `http://localhost:8000/api/books/image/${this.id}`;
        },
        title: " Frankie & Bug ",
        author: ["Gayle Forman"],
        date_info: " Hardcover - Oct. 12 2021 ",
        publisher: "Aladdin (Oct. 12 2021)",
        language: "English",
        pages: "288",
        description:
            "Joyful, occasionally heartbreaking, deeply moving.  R. J. Palacio, bestselling author of Wonder In the debut middle grade novel from #1 New York Times bestselling author Gayle Forman comes a poignant and powerful coming-of-age story that follows a young girl and her new friend as they learn about family, friendship, allyship, and finding your way in a complicated world.Its the summer of 1987, and all ten-year-old Bug wants to do is go to the beach with her older brother and hang out with the locals on the boardwalk. But Danny wants to be with his own friends, and Bugs mom is too busy, so Bug is stuck with their neighbor Philips nephew, Frankie. Bugs not too excited about hanging out with a kid shes never met, but they soon find some common ground. And as the summer unfolds, they find themselves learning some important lessons about each other, and the world. Like what it means to be your true self and how to be a good ally for others. That family can be the people you're related to, but also the people you choose to have around you. And that even though life isnt always fair, we can all do our part to make it more just.  ",
        category: "kids",
    },
    {
        id: "SHRHgH-0j3",
        image: function () {
            return `http://localhost:8000/api/books/image/${this.id}`;
        },
        title: " Dust & Grim ",
        author: ["Chuck Wendig"],
        date_info: " Hardcover - Oct. 19 2021 ",
        publisher: "Little, Brown Books for Young Readers (Oct. 19 2021)",
        language: "English",
        pages: "384",
        description:
            "\" From a bestselling author: Miss Peregrine meets The Graveyard Book in this middle grade adventure about rival siblings running a monster mortuary.?Thirteen-year-old Molly doesn't know how she got the short end of the stick being raised by her neglectful father while Dustin, the older brother she's never met, got their mother and the keys to the family estate. But now the siblings are both orphaned, she's come home for her inheritance, and if Dustin won't welcome her into the family business, then she'll happily take her half in cash.There's just one problem: the family business is a mortuary for monsters, and Molly's not sure she's ready to deal with mysterious doors, talking wolves, a rogue devourer of magic, and a secret cemetery. It's going to take all of Dustin's stuffy supernatural knowledge and Molly's most heroic cosplay (plus a little help from non-human friends) for the siblings to figure it out and save the day...if only they can get along for five minutes.Bestselling author Chuck Wendig's middle grade debut is equal parts spooky, funny, and heartfelt perfect for Halloween and year-round reading!  \"",
        category: "kids",
    },
    {
        id: "17gNu9ifDw",
        image: function () {
            return `http://localhost:8000/api/books/image/${this.id}`;
        },
        title: " Bad Sister ",
        author: ["Charise Mericle Harper", "Rory Lucey"],
        date_info: " Hardcover - Sept. 14 2021 ",
        publisher: "First Second (Sept. 14 2021)",
        language: "English",
        pages: "240",
        description:
            "  This middle grade graphic memoir by Charise Mericle Harper, featuring illustrations by Rory Lucey, follows a young girl who undergoes a crisis of conscience, realizing that she is a bad sister. - Meet Charise.She s energetic, helpful, a model pet owner and full of inventions.But shes also a bad sister. When she goes too far and breaks little brother Daniel s tooth, can she redeem herself? Is an accident really an accident if you could have stopped it? But most importantly... What does it mean to be a good sister?  ",
        category: "kids",
    },
];

module.exports = books;
