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

    Book.create!(
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



    Book.create!(
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

    Book.create!(
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

    Book.create!(
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

    Book.create!(
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

      Book.create!(
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

      Book.create!(
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

      Book.create!(
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

      Book.create!(
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
    10.times do
        User.create(
            first_name: Faker::Name.unique.first_name,
            last_name: Faker::Name.unique.last_name,
            email: Faker::Internet.email,
            password: '123456'
        )
    end

    100.times do 
        Book.create(
            title: Faker::Book.title,
            author: Faker::Book.author,
            genre: Faker::Book.genre,
            read: false, 
            currently_reading: false, 
            want_to_read: false,
            url: 'book.jpeg',
            description: Faker::Hipster.paragraph
        )
    end

    100.times do
        Review.create(
            user_id: rand(1..10),
            book_id: rand(1..100),
            rating: rand(1..5),
            body: Faker::Quote.most_interesting_man_in_the_world,
            
        )
    end
    # User.create(first_name: 'Todd', last_name: 'McTodd', email: 'toddsonoftodd@todd.com', password: '123456')
    # Book.create(title: 'Harry Potter', author: 'J.K. Rowling', genre: 'Fantasy', read: true, currently_reading: false, want_to_read: false )
    # Review.create(user_id: 1, book_id: 1, rating: 3, body: 'An ok book about a wizard boy with no parents ')
    Book.all.each do |book|
        
       shelf = BookShelf.create(
            user_id: rand(1..10),
            book_id: book.id,
            name: ["read", "want_to_read", "currently_reading"].shuffle.first
        )
        Library.create(book_id: book.id, shelf_id: shelf.id)
    end
    # BookShelf.create(user_id: 1, book_id: 1, name: "read")
    demo = User.create(
            first_name: 'Demo',
            last_name: 'Demo',
            email: 'demo',
            password: '123456')

end
