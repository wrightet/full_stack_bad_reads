# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'


# include Faker
I18n.reload!
ActiveRecord::Base.transaction do
    Book.destroy_all
    Library.destroy_all
    BookShelf.destroy_all
    User.destroy_all
    Review.destroy_all

    #   Book.all.each do |book|
        
    #    shelf = BookShelf.create(
    #         user_id: user_ids[rand(0..user_ids.length - 1 )],
    #         book_id: book.id,
    #         name: ["read", "want_to_read", "currently_reading"].shuffle.first
    #     )
    #     Library.create(book_id: book.id, shelf_id: shelf.id)
    # end
    10.times do
        User.create(
            first_name: Faker::Name.unique.first_name,
            last_name: Faker::Name.unique.last_name,
            email: Faker::Internet.email,
            password: '123456'
        )
    end
    
    demo = User.create(
        first_name: 'Demo',
        last_name: 'Demo',
        email: 'demo',
        password: '123456')
        
    user_ids = User.all.map {|user| user.id}

    user_ids.each do |id|
        BookShelf.create(
            user_id:id,
            name: 'read'
        )
        BookShelf.create(
            user_id:id,
            name: 'want to read'
        )
        BookShelf.create(
            user_id:id,
            name: 'currently reading'
        )
    end

    book_1 = Book.create!(
        title: 'Romeo and Juliet',
        author: 'William Shakespeare',
        genre: 'Romance',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'romeo.jpeg',
        description: 'Romeo and Juliet is a play writen by the playwright William Shakespeare.
        The play follows two star crossed lovers who belong to rival families.'

    )
    file1 = open("https://bad-seeds.s3-us-west-1.amazonaws.com/romeo.jpg")
    book_1.photo.attach(io: file1, filename:"romeo.jpg")
    

    book_2 = Book.create!(
        title: 'The Tempest',
        author: 'William Shakespeare',
        genre: 'Comedy',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'tempest.jpeg',
        description: "The Tempest is one of the most popular plays of all time.
         Set on an enchanted island where humans, monsters, and fairies meet, William 
        Shakespeare's most magical play will delight young readers in this spirited 
        retelling, illustrated in rich detail."

    )
    file2 = open("https://bad-seeds.s3-us-west-1.amazonaws.com/tempest.jpeg")
    book_2.photo.attach(io: file2, filename:"tempest.jpeg")

    book_3 = Book.create!(
        title: 'A Midsummer Nights Dream',
        author: 'William Shakespeare',
        genre: 'Romance',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'midsummer.jpeg',
        description: "Shakespeare's intertwined love polygons begin to get 
        complicated from the start--Demetrius and Lysander both want Hermia but 
        she only has eyes for Lysander. Bad news is, Hermia's father wants 
        Demetrius for a son-in-law. On the outside is Helena, whose unreturned 
        love burns hot for Demetrius. Hermia and Lysander plan to flee from the
         city under cover of darkness but are pursued by an enraged Demetrius 
         (who is himself pursued by an enraptured Helena). In the forest, 
         unbeknownst to the mortals, Oberon and Titania 
         (King and Queen of the faeries) are having a spat over a servant boy. 
         The plot twists up when Oberon's head mischief-maker, Puck, runs loose
        with a flower which causes people to fall in love with the first thing
        they see upon waking. Throw in a group of labourers preparing a play 
        for the Duke's wedding (one of whom is given a donkey's head and 
        Titania for a lover by Puck) and the complications become fantastically funny."

    )
    file3 = open("https://bad-seeds.s3-us-west-1.amazonaws.com/midsummer.jpeg")
    book_3.photo.attach(io: file3, filename:"midsummer.jpeg")

    book_4 = Book.create!(
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Fiction',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'gatsby.jpeg',
        description: "The Great Gatsby, F. Scott Fitzgerald's third book, 
        stands as the supreme achievement of his career. This exemplary novel 
        of the Jazz Age has been acclaimed by generations of readers. The story 
        is of the fabulously wealthy Jay Gatsby and his new love for the beautiful 
        Daisy Buchanan, of lavish parties on Long Island at a time when The New York Time's noted,
        gin was the national drink and sex the national obcession, it is an exquisitely crafted tale of America in the 1920s.
        
        The Great Gatsby is one of the great classics of twentieth-century literature."

    )
    file4 = open("https://bad-seeds.s3-us-west-1.amazonaws.com/gatsby.jpeg")
    book_4.photo.attach(io: file4, filename:"gatsby.jpeg")

    book_5 = Book.create!(
        title: 'Moby Dick',
        author: 'Herman Melville',
        genre:'Nautical Fiction',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'moby.jpeg',
        description: "On a previous voyage, a mysterious white whale had ripped 
        off the leg of a sea captain named Ahab. Now the crew of the Pequod, 
        on a pursuit that features constant adventure and horrendous mishaps, 
        must follow the mad Ahab into the abyss to satisfy his unslakeable 
        thirst for vengeance. Narrated by the cunningly observant crew member 
        Ishmael, Moby-Dick is the tale of the hunt for the elusive, omnipotent,
         and ultimately mystifying white whale—Moby Dick. On its surface, 
         Moby-Dick is a vivid documentary of life aboard a nineteenth-century 
         whaler, a virtual encyclopedia of whales and whaling, replete with 
         facts, legends, and trivia that Melville had gleaned from personal 
         experience and scores of sources. But as the quest for the whale becomes 
         increasingly perilous, the tale works on allegorical levels, likening
          the whale to human greed, moral consequence, good, evil, and life itself. 
          Who is good? The great white whale who, like Nature, asks nothing but 
          to be left in peace? Or the bold Ahab who, like scientists, explorers,
           and philosophers, fearlessly probes the mysteries of the universe? 
           Who is evil? The ferocious, man-killing sea monster? Or the 
           revenge-obsessed madman who ignores his own better nature in his 
           quest to kill the beast? Scorned by critics upon its publication, 
           Moby-Dick was publicly derided during its author’s lifetime. Yet 
           Melville’s masterpiece has outlived its initial misunderstanding 
           to become an American classic of unquestionably epic proportions.
        Includes unique illustrations"

    )
    file5 = open("https://bad-seeds.s3-us-west-1.amazonaws.com/moby.jpeg")
    book_5.photo.attach(io: file5, filename:"moby.jpeg")

      book_6 = Book.create!(
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        genre: 'Fiction',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'catcher.jpeg',
        description:"The hero-narrator of The Catcher in the Rye is an ancient 
        child of sixteen, a native New Yorker named Holden Caulfield. Through 
        circumstances that tend to preclude adult, secondhand description, he 
        leaves his prep school in Pennsylvania and goes underground in New York 
        City for three days. The boy himself is at once too simple and too 
        complex for us to make any final comment about him or his story. 
        Perhaps the safest thing we can say about Holden is that he was born 
        in the world not just strongly attracted to beauty but, almost, hopelessly 
        impaled on it. There are many voices in this novel: children's voices, 
        adult voices, underground voices-but Holden's voice is the most eloquent
         of all. Transcending his own vernacular, yet remaining marvelously 
         faithful to it, he issues a perfectly articulated cry of mixed pain 
         and pleasure. However, like most lovers and clowns and poets of the 
         higher orders, he keeps most of the pain to, and for, himself. 
         The pleasure he gives away, or sets aside, with all his heart. 
         It is there for the reader who can handle it to keep. J.D. Salinger's 
         classic novel of teenage angst and rebellion was first published in 1951. 
         The novel was included on Time's 2005 list of the 100 best 
         English-language novels written since 1923. It was named by Modern 
         Library and its readers as one of the 100 best English-language novels 
         of the 20th century. It has been frequently challenged in the court for
        its liberal use of profanity and portrayal of sexuality and in the 
        1950's and 60's it was the novel that every teenage boy wants to read."

    )
    file6 = open("https://bad-seeds.s3-us-west-1.amazonaws.com/catcher.jpeg")
    book_6.photo.attach(io: file6, filename:"catcher.jpeg")
     book_7 = Book.create!(
        title: 'Twilight',
        author: 'Stephenie Meyer',
        genre: 'Romance/Fantasy',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'twilight.jpeg',
        description: "About three things I was absolutely positive.
        First, Edward was a vampire.Second, there was a part of him—and I 
        didn't know how dominant that part might be—that thirsted for my blood.
        And third, I was unconditionally and irrevocably in love with him.
        Deeply seductive and extraordinarily suspenseful, Twilight is a love story with bite."

    )
    file7 = open("https://bad-seeds.s3-us-west-1.amazonaws.com/twilight.jpeg")
    book_7.photo.attach(io: file7, filename:"twilight.jpeg")

      book_8 = Book.create!(
        title: 'Eragon',
        author: 'Christopher Paolini',
        genre: 'Fantasy',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'eragon.jpeg',
        description: "One boy...
        One dragon...
        A world of adventure.

        When Eragon finds a polished blue stone in the forest, he thinks it is 
        the lucky discovery of a poor farm boy; perhaps it will buy his family 
        meat for the winter. But when the stone brings a dragon hatchling, 
        Eragon soon realizes he has stumbled upon a legacy nearly as old as 
        the Empire itself.

        Overnight his simple life is shattered, and he is thrust into a perilous 
        new world of destiny, magic, and power. With only an ancient sword and 
        tge advice of an old storyteller for guidance, Eragon and the fledgling
         dragon must navigate the dangerous terrain and dark enemies of an Empire
         ruled by a king whose evil knows no bounds.

        Can Eragon take up the mantle of the legendary Dragon Riders? 
        The fate of the Empire may rest in his hands."

    )
    file8 = open("https://bad-seeds.s3-us-west-1.amazonaws.com/eragon.jpeg")
    book_8.photo.attach(io: file8, filename:"eragon.jpeg")

      book_9 = Book.create!(
        title: 'Fifty Shades of Grey',
        author: 'E.L. James',
        genre:'Erotic Romance Novel',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'fifty.jpeg',
        description: "When literature student Anastasia Steele goes to interview 
        young entrepreneur Christian Grey, she encounters a man who is beautiful, 
        brilliant, and intimidating. The unworldly, innocent Ana is startled to 
        realize she wants this man and, despite his enigmatic reserve, finds 
        she is desperate to get close to him. Unable to resist Ana’s quiet 
        beauty, wit, and independent spirit, Grey admits he wants her, too—but 
        on his own terms.
 
        Shocked yet thrilled by Grey’s singular erotic tastes, Ana hesitates. 
        For all the trappings of success—his multinational businesses, his vast 
        wealth, his loving family—Grey is a man tormented by demons and consumed 
        by the need to control. When the couple embarks on a daring, passionately 
        physical affair, Ana discovers Christian Grey’s secrets and explores her 
        own dark desires.

        Erotic, amusing, and deeply moving, the Fifty Shades Trilogy is a tale 
        that will obsess you, possess you, and stay with you forever."

    )
    file9 = open("https://bad-seeds.s3-us-west-1.amazonaws.com/fifty.jpeg")
    book_9.photo.attach(io: file9, filename:"fifty.jpeg")
  
    book_10 = Book.create!(
        title: 'The Golden Compass',
        author: 'Philip Pullman',
        genre:'Fantasy',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'golden_compass.jpeg',
        description: 'The Golden Compass is a young-adult fantasy novel by Philip Pullman, published 
        in 1995 by Scholastic UK. Set in a parallel universe, it features the journey 
        of Lyra Belacqua to the Arctic in search of her missing friend, Roger Parslow, 
        and her imprisoned uncle, Lord Asriel, who has been conducting experiments 
        with a mysterious substance known as "Dust".'
    )
  
    file_10 = open("https://bad-seeds.s3-us-west-1.amazonaws.com/golden_compass.jpeg")
    book_10.photo.attach(io: file_10, filename:"golden_compass.jpeg")

     book_11 = Book.create!(
        title: 'First Steps 2 Forever',
        author: 'Justin Bieber',
        genre:'Autobiography',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'sirst_steps.jpeg',
        description: "I love those lines in the lyrics. Sometimes I feel like that's what everyone's expecting.
        My world got very big, very fast, and a lot of people expect me to get lost in it. 
        I grew up in a small town in Canada. I taught myself to sing in front of my bedroom 
        mirror and to play guitar on a hand-me-down. My mom posted my first videos on YouTube.
        Never in my wildest dreams did I think that I'd sell millions of records, sing for the 
        president of the United States and sell out a massive arena tour. So no, 
        I'm not lost. Not at all. If anything, onstage in front of my fans, I'm home.
        I'm found. And that's what this book is about: my journey, from singing and 
        busking on the sidewalk in Stratford, Ontario, to performing and showing my 
        appreciation to millions of fans all over the world for making this dream a reality.
        My music and lyrics give a glimpse of what's in my heart, but I think this book 
        is a window into my world. In here are hundreds of pictures of me that no one's ever seen before,
        and I'll tell you about who I was before I joined forces with Scooter Braun and Usher and got a record deal, 
        and who I've become since I've been blessed with the opportunity to share my music with the world. This is 
        my gift to you, the fans who've supported and been with me on this amazing journey every step of the way."
    )
  
    file_11 = open("https://bad-seeds.s3-us-west-1.amazonaws.com/first_steps.jpeg")
    book_11.photo.attach(io: file_11, filename:"first_steps.jpeg")

    book_12 = Book.create!(
        title: 'A Wrinkle in Time',
        author: "Madeleine L'Engle",
        genre:'Young Adult',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'wrinkle_in_time.jpeg',
        description: "Out of this wild night, a strange visitor comes to the Murry 
        house and beckons Meg, her brother Charles Wallace, and their friend Calvin 
        O'Keefe on a most dangerous and extraordinary adventure—one that will threaten 
        their lives and our universe.

        Winner of the 1963 Newbery Medal, A Wrinkle in Time is the first book in 
        Madeleine L'Engle's classic Time Quintet."
    )
  
    file_12 = open("https://bad-seeds.s3-us-west-1.amazonaws.com/wrinkle_in_time.jpeg")
    book_12.photo.attach(io: file_12, filename:"wrinkle_in_time.jpeg")

    book_13 = Book.create!(
        title: 'Ulysses',
        author: 'James Joyce',
        genre:'Modernist',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'ulysses.jpeg',
        description: 'Loosely based on the Odyssey, this landmark of modern
        literature follows ordinary Dubliners in 1904. Capturing a single day
        in the life of Dubliner Leopold Bloom, his friends Buck Mulligan and 
        Stephen Dedalus, his wife Molly, and a scintillating cast of supporting
         characters, Joyce pushes Celtic lyricism and vulgarity to splendid 
         extremes. Captivating experimental techniques range from interior 
         monologues to exuberant wordplay and earthy humor. A major achievement 
         in 20th century literature'
    )
  
    file_13 = open("https://bad-seeds.s3-us-west-1.amazonaws.com/ulysses.jpeg")
    book_13.photo.attach(io: file_13, filename:"ulysses.jpeg")

    book_14 = Book.create!(
        title: 'The Awakening',
        author: 'Kate Chopin',
        genre:'Novel',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'awakening.jpeg',
        description: "When first published in 1899, The Awakening shocked readers 
        with its honest treatment of female marital infidelity. Audiences accustomed 
        to the pieties of late Victorian romantic fiction were taken aback by Chopin's 
        daring portrayal of a woman trapped in a stifling marriage, who seeks and finds 
        passionate physical love outside the confines of her domestic situation.

        Aside from its unusually frank treatment of a then-controversial subject, 
        the novel is widely admired today for its literary qualities. Edmund Wilson 
        characterized it as a work 
        ""quite uninhibited and beautifully written, which anticipates D. H. Lawrence in its treatment of infidelity."" 
        Although the theme of marital infidelity no longer shocks, few novels have plumbed the psychology of 
        a woman involved in an illicit relationship with the perception, artistry, and honesty that Kate Chopin brought 
        to The Awakening."
    )
  
    file_14 = open("https://bad-seeds.s3-us-west-1.amazonaws.com/awakening.jpeg")
    book_14.photo.attach(io: file_14, filename:"awakening.jpeg")

    book_15 = Book.create!(
        title: 'The Cursed Child',
        author: 'J.K. Rowling',
        genre:'Fantasy',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'cursed_child.jpeg',
        description: ''
    )
  
    file_15 = open("https://bad-seeds.s3-us-west-1.amazonaws.com/cursed_child.jpeg")
    book_15.photo.attach(io: file_15, filename:"curse_child.jpeg")

    book_16 = Book.create!(
        title: 'The Outsider',
        author: 'Stphen King',
        genre:'Horror',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'outsider.jpeg',
        description: "An unspeakable crime. A confounding investigation. At a 
        time when the King brand has never been stronger, he has delivered one 
        of his most unsettling and compulsively readable stories.

        An eleven-year-old boy’s violated corpse is found in a town park. 
        Eyewitnesses and fingerprints point unmistakably to one of Flint City’s 
        most popular citizens. He is Terry Maitland, Little League coach, English 
        teacher, husband, and father of two girls. Detective Ralph Anderson, 
        whose son Maitland once coached, orders a quick and very public arrest. 
        Maitland has an alibi, but Anderson and the district attorney soon add 
        DNA evidence to go with the fingerprints and witnesses. Their case seems 
        ironclad.

        As the investigation expands and horrifying answers begin to emerge, 
        King’s propulsive story kicks into high gear, generating strong tension 
        and almost unbearable suspense. Terry Maitland seems like a nice guy, 
        but is he wearing another face? When the answer comes, it will shock 
        you as only Stephen King can."
    )
  
    file_16 = open("https://bad-seeds.s3-us-west-1.amazonaws.com/outsider.jpeg")
    book_16.photo.attach(io: file_16, filename:"outsider.jpeg")

    book_17 = Book.create!(
        title: 'Water for Elephants',
        author: 'Sara Gruen',
        genre:'Fiction',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'water_for_elephants.jpeg',
        description: "Winner of the 2007 BookBrowse Award for Most Popular Book.
        
        An atmospheric, gritty, and compelling novel of star-crossed lovers, 
        set in the circus world circa 1932, by the bestselling author of Riding Lessons.

        When Jacob Jankowski, recently orphaned and suddenly adrift, jumps onto 
        a passing train, he enters a world of freaks, drifters, and misfits, 
        a second-rate circus struggling to survive during the Great Depression, 
        making one-night stands in town after endless town. A veterinary student 
        who almost earned his degree, Jacob is put in charge of caring for the 
        circus menagerie. It is there that he meets Marlena, the beautiful 
        young star of the equestrian act, who is married to August, 
        the charismatic but twisted animal trainer. He also meets Rosie, 
        an elephant who seems untrainable until he discovers a way to reach her.

        Beautifully written, Water for Elephants is illuminated by a wonderful 
        sense of time and place. It tells a story of a love between two people 
        that overcomes incredible odds in a world in which even love is a 
        luxury that few can afford."
    )

    file_17 = open("https://bad-seeds.s3-us-west-1.amazonaws.com/water_for_elephants.jpeg")
    book_17.photo.attach(io: file_17, filename:"water_for_elephants.jpeg")

    book_18 = Book.create!(
        title: 'On the Road',
        author: 'Jack Kerouac',
        genre:'Beat Generation',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'on_the_road.jpeg',
        description: "A quintessential novel of America & the Beat Generation On 
        the Road chronicles Jack Kerouac's years traveling the N. American continent 
        with his friend Neal Cassady, ""a sideburned hero of the snowy West."" As 
        ""Sal Paradise"" & ""Dean Moriarty,"" the two roam the country in a quest 
        for self-knowledge & experience. Kerouac's love of America, compassion for 
            humanity & sense of language as jazz combine to make On the Road an 
            inspirational work of lasting importance. This classic novel of 
            freedom & longing defined what it meant to be ""Beat"" & has inspired 
            every generation since its initial publication"
    )
  
    file_18 = open("https://bad-seeds.s3-us-west-1.amazonaws.com/on_the_road.jpeg")
    book_18.photo.attach(io: file_18, filename:"on_the_road.jpeg")

    book_19 = Book.create!(
        title: 'Alone Together: Why We Expect MOre from Technology and Less from Each Other',
        author: 'Sherry Turkle',
        genre:'Psychology',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'alone_together.jpeg',
        description: 'A groundbreaking book by one of the most important thinkers 
        of our time shows how technology is warping our social lives and our inner ones

        Technology has become the architect of our intimacies. Online, we fall prey to 
        the illusion of companionship, gathering thousands of Twitter and Facebook friends,
        and confusing tweets and wall posts with authentic communication. But this 
        relentless connection leads to a deep solitude. MIT professor Sherry Turkle
        argues that as technology ramps up, our emotional lives ramp down. Based on 
        hundreds of interviews and with a new introduction taking us to the present
        day, Alone Together describes changing, unsettling relationships between 
        friends, lovers, and families.'
    )
  
    file_19 = open("")
    book_19.photo.attach(io: file_19, filename:"")

    book_20 = Book.create!(
        title: 'Extremely Loud & Incredibly Close',
        author: 'Jonathan Safran Foer',
        genre:'Fiction',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'loud.jpeg',
        description: "Nine-year-old Oskar Schell is an inventor, amateur entomologist, 
        Francophile, letter writer, pacifist, natural historian, percussionist, 
        romantic, Great Explorer, jeweller, detective, vegan, and collector of 
        butterflies. When his father is killed in the September 11th attacks on 
        the World Trade Centre, Oskar sets out to solve the mystery of a key he 
        discovers in his father's closet. It is a search which leads him into 
        the lives of strangers, through the five boroughs of New York, into 
        history, to the bombings of Dresden and Hiroshima, and on an inward 
        journey which brings him ever closer to some kind of peace."
    )
  
    file_20 = open("")
    book_20.photo.attach(io: file_20, filename:"")

    book_21 = Book.create!(
        title: 'Advanced Engineering Mathematics',
        author: 'Erwin Kreyszig',
        genre:'Engineering',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'engineering.jpeg',
        description: "Advanced Engineering Mathematics, 10th Edition is known 
        for its comprehensive coverage, careful and correct mathematics, 
            outstanding exercises, and self-contained subject matter parts for 
            maximum flexibility. The new edition continues with the tradition of
             providing instructors and students with a comprehensive and up-to-date 
             resource for teaching and learning engineering mathematics, that is, 
             applied mathematics for engineers and physicists, mathematicians 
             and computer scientists, as well as members of other disciplines."
    )
  
    file_21 = open("")
    book_21.photo.attach(io: file_21, filename:"")

    book_22 = Book.create!(
        title: 'Old Man and the Sea',
        author: 'Ernest Hemmingway',
        genre:'Fiction',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'old_man.jpeg',
        description: "This short novel, already a modern classic, is the 
        superbly told, tragic story of a Cuban fisherman in the Gulf Stream 
        and the giant Marlin he kills and loses—specifically referred to in
        the citation accompanying the author's Nobel Prize for literature in
         1954."
    )
  
    file_22 = open("")
    book_22.photo.attach(io: file_22, filename:"")

    book_23 = Book.create!(
        title: 'Persuasion',
        author: 'Jane Austen',
        genre:'Fiction',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'persuasion.jpeg',
        description: "Twenty-seven-year old Anne Elliot is Austen's most adult 
        heroine. Eight years before the story proper begins, she is happily
         betrothed to a naval officer, Frederick Wentworth, but she precipitously 
         breaks off the engagement when persuaded by her friend Lady Russell that 
         such a match is unworthy. The breakup produces in Anne a deep and 
         long-lasting regret. When later Wentworth returns from sea a rich and 
         successful captain, he finds Anne's family on the brink of financial 
         ruin and his own sister a tenant in Kellynch Hall, the Elliot estate. 
         All the tension of the novel revolves around one question: Will Anne 
         and Wentworth be reunited in their love?

        Jane Austen once compared her writing to painting on a little bit of ivory, 2 
        inches square. Readers of Persuasion will discover that neither her skill for 
        delicate, ironic observations on social custom, love, and marriage nor her ability 
        to apply a sharp focus lens to English manners and morals has deserted her in 
        her final finished work. "
    )

    file_23 = open("")
    book_23.photo.attach(io: file_23, filename:"")

    book_24 = Book.create!(
        title: 'Choke',
        author: 'Chuck Palahnuik',
        genre:'Fiction',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'choke.jpeg',
        description: 'Victor Mancini, a medical-school dropout, is an antihero 
        for our deranged times. Needing to pay elder care for his mother, Victor 
            has devised an ingenious scam: he pretends to choke on pieces of 
            food while dining in upscale restaurants. He then allows himself 
            to be “saved” by fellow patrons who, feeling responsible for 
            Victor’s life, go on to send checks to support him. When he’s not 
            pulling this stunt, Victor cruises sexual addiction recovery 
            workshops for action, visits his addled mom, and spends his days 
            working at a colonial theme park. His creator, Chuck Palahniuk, is 
            the visionary we need and the satirist we deserve.'
    )
  
    file_24 = open("")
    book_24.photo.attach(io: file_24, filename:"")


    book_25 = Book.create!(
        title: '',
        author: '',
        genre:'',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: '',
        description: ''
    )
  
    file_25 = open("")
    book_25.photo.attach(io: file_25, filename:"")


    book_25 = Book.create!(
        title: '',
        author: '',
        genre:'',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: '',
        description: ''
    )
  
    file_25 = open("")
    book_25.photo.attach(io: file_25, filename:"")


    book_26 = Book.create!(
        title: '',
        author: '',
        genre:'',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: '',
        description: ''
    )
  
    file_26 = open("")
    book_26.photo.attach(io: file_26, filename:"")


    book_27 = Book.create!(
        title: '',
        author: '',
        genre:'',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: '',
        description: ''
    )
  
    file_27 = open("")
    book_27.photo.attach(io: file_27, filename:"")


    book_28 = Book.create!(
        title: '',
        author: '',
        genre:'',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: '',
        description: ''
    )
  
    file_28 = open("")
    book_28.photo.attach(io: file_28, filename:"")


    book_29 = Book.create!(
        title: '',
        author: '',
        genre:'',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: '',
        description: ''
    )
  
    file_29 = open("")
    book_29.photo.attach(io: file_29, filename:"")


    book_30 = Book.create!(
        title: '',
        author: '',
        genre:'',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: '',
        description: ''
    )
  
    file_30 = open("")
    book_30.photo.attach(io: file_30, filename:"")


    book_31 = Book.create!(
        title: '',
        author: '',
        genre:'',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: '',
        description: ''
    )
  
    file_31 = open("")
    book_31.photo.attach(io: file_31, filename:"")


    book_32 = Book.create!(
        title: '',
        author: '',
        genre:'',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: '',
        description: ''
    )
  
    file_32 = open("")
    book_32.photo.attach(io: file_32, filename:"")


    book_33 = Book.create!(
        title: '',
        author: '',
        genre:'',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: '',
        description: ''
    )
  
    file_33 = open("")
    book_33.photo.attach(io: file_33, filename:"")
    # all users must be created above this line
    
    
    100.times do 
       book = Book.create(
            title: Faker::Book.title,
            author: Faker::Book.author,
            genre: Faker::Book.genre,
            read: false, 
            currently_reading: false, 
            want_to_read: false,
            url: 'book.jpeg',
            description: Faker::Hipster.paragraph
        )
        file = open("https://bad-seeds.s3-us-west-1.amazonaws.com/book.jpeg")
        book.photo.attach(io: file, filename:"book.jpeg")

    end

    book_ids = Book.all.map{|book| book.id}

    # Book.all.each do |book|
        
    #    shelf = BookShelf.create(
    #         user_id: user_ids[rand(0..user_ids.length - 1 )],
    #         name: ["read", "want_to_read", "currently_reading"].shuffle.first
    #     )
    #     Library.create(book_id: book.id, shelf_id: shelf.id)
    # end

    Book.all.each_with_index do |book,idx|
        if idx % 2 == 0
            Library.create!(book_id: book.id, shelf_id: BookShelf.first.id)
        else
            Library.create!(book_id: book.id, shelf_id: BookShelf.last.id)
        end
    end
    
    book_ids.each do |book_id|
        5.times do
            Review.create(
                book_id: book_id,
                user_id: user_ids[rand(0..user_ids.length - 1 )],
                rating: rand(1..5),
                body: Faker::Quote.most_interesting_man_in_the_world,
                
            )
        end
    end

    


end
