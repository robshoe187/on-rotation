const db = require('./connection');
const { Album } = require('../models');

db.once('open', async () => {
await Album.deleteMany();


const album = await Album.insertMany([
    {
        title: 'Madvillainy',
        artist: 'Madvillain',
        description: `Madvillainy is a studio album by American hip hop duo Madvillain, consisting of rapper MF Doom and producer Madlib. It was released on March 23, 2004, on Stones Throw Records.

        The album was recorded between 2002 and 2004. Madlib created most of the instrumentals during a trip to Brazil in his hotel room using minimal amounts of equipment: a Boss SP-303 sampler, a turntable, and a tape deck. Fourteen months before the album was released, an unfinished demo version was stolen and leaked onto the internet. Frustrated, the duo stopped working on the album and returned to it only after they had released other solo projects.
        
        While Madvillainy achieved only moderate commercial success, it became one of the best-selling Stones Throw albums. It peaked at number 179 on the US Billboard 200, and attracted attention from media outlets not usually covering hip hop music, including The New Yorker. Madvillainy received widespread critical acclaim for Madlib's production and MF Doom's lyricism, and is regarded as Doom's magnum opus. It has ranked in various publications' lists of all-time greatest albums, including at 411 on NME's list of The 500 Greatest Albums of All Time and at 365 on Rolling Stone's 500 Greatest Albums of All Time.`,
        image: 'Madvillainy.png',
        price: 40,
        quantity: 25,
        rating: 0

     },
     {
        title: 'Californication',
        artist: 'The Red Hot Chili Peppers',
        description: `Californication is the seventh studio album by American rock band Red Hot Chili Peppers. It was released on June 8, 1999, on Warner Bros. Records and was produced by Rick Rubin. Californication marked the return of John Frusciante, who had previously appeared on Mother's Milk and Blood Sugar Sex Magik, to replace Dave Navarro as the band's guitarist. Frusciante's return was credited with changing the band's sound altogether, producing a notable shift in style from the music recorded with Navarro. The album's subject material incorporated various sexual innuendos commonly associated with the band, but also contained more varied themes than previous outings, including death, contemplations of suicide, California, drugs, globalization, and travel.

        Californication is the Chili Peppers' most commercially successful studio release internationally, with over 15 million copies sold worldwide, and more than 6 million in the United States alone. As of 2002, the album had sold over 4 million copies in Europe. The record produced several hits for the band, including "Otherside", "Californication" and the Grammy Award-winning "Scar Tissue". Californication peaked at number three on the US Billboard 200.
        
        The record marked a significant change in style for the band: Rolling Stone's Greg Tate noted that "while all previous Chili Peppers projects have been highly spirited, Californication dares to be spiritual and epiphanic".Another critic, Billboard's Paul Verna, mentioned that the album brought out "the group's softer, melodic side", as opposed to their previous six albums`,
        image: 'Californication.jpg',
        price: 40,
        quantity: 25,
        rating: 0

     },
     {
        title: 'Saturdays = Youth',
        artist: 'M-83',
        description: `Saturdays = Youth is the fifth studio album by French electronic music band M83, released on 11 April 2008 by Virgin Records. The album was produced by Ken Thomas, with co-production by Ewan Pearson and M83 frontman Anthony Gonzalez.

        The album yielded four singles: "Couleurs" in February 2008, "Graveyard Girl" in April, "Kim & Jessie" in July and "We Own the Sky" in December. "Kim & Jessie" was placed at number 256 on Pitchfork's list of "The Top 500 Tracks of the 2000s" in August 2009.
        
        As of October 2011, the album had sold 76,000 copies in the United States, according to Nielsen SoundScan. Sales outside of France between 1 October 2011 and 30 September 2012 reached 152,300 copies, according to Le Bureau Export.`,
        image: 'Saturdays_=_Youth.png',
        price: 40,
        quantity: 25,
        rating: 0

     },
     {
        title: 'Sticky Fingers',
        artist: 'The Rolling Stones',
        description: `Sticky Fingers is the 9th British and 11th American studio album by the English rock band the Rolling Stones, released on 23 April 1971 on their new, and own, label Rolling Stones Records after previously having been contracted by Decca Records and London Records in the UK and US since 1963. It is Mick Taylor's second full-length appearance on a Rolling Stones album (after the live album Get Yer Ya-Ya's Out!), and the first studio album without Brian Jones who died two years earlier. The original cover artwork, conceived by Andy Warhol and photographed and designed by members of his art collective, The Factory, showed a picture of a man in tight jeans, and had a working zipper that opened to reveal underwear fabric. The cover was expensive to produce and damaged the vinyl record, so later re-issues featured just the outer photograph of the jeans.

        The album featured a return to basics for the Rolling Stones. The unusual instrumentation introduced several albums prior was absent; most songs featuring drums, guitar, bass, and percussion as provided by the key members: Mick Jagger (lead vocal, various percussion and rhythm guitar), Keith Richards (guitar and backing vocal), Mick Taylor (guitar), Bill Wyman (bass guitar), and Charlie Watts (drums). Additional contributions were made by long-time Stones collaborators including saxophonist Bobby Keys and keyboardists Billy Preston, Jack Nitzsche, Ian Stewart, and Nicky Hopkins. As with the other albums of the Rolling Stones classic late 1960s/early 1970s period, it was produced by Jimmy Miller.
        
        Sticky Fingers is considered one of the Rolling Stones' best albums. It was the band's first album to reach number one on both the UK albums and US albums charts, and has since achieved triple platinum certification in the US. "Brown Sugar” topped the Billboard Hot 100 in 1971. Sticky Fingers was voted the second best album of the year in The Village Voice's annual Pazz & Jop critics poll for 1971, based on American critics' votes. The album is inducted in the Grammy Hall of Fame and included in Rolling Stone magazine's 500 Greatest Albums of All Time list.`,
        image: 'Sticky-Fingers.png',
        price: 40,
        quantity: 25,
        rating: 0

     },
     {
        title: 'Stranger Things Vol. 1 ',
        artist: 'Kyle Dixon & Michael Stein',
        description: `Stranger Things is the original soundtrack for the first season of the Netflix series of the same name. The first and second volume were released digitally by Lakeshore and Ivada Records on August 12 and 19, 2016, respectively. Consisting of 75 songs produced and composed by Kyle Dixon and Michael Stein electronic band Survive, this release sums up to the duo's first collaboration outside of the band. The CD release of the soundtrack was similar to the digital rollout, with the first and second volumes being released on September 16 and 23, respectively, and limited editions on vinyl, in both individual and boxed sets, were released in July 2017. A cassette version of the first volume of the soundtrack, sold exclusively by Urban Outfitters, was released on July 14, 2017. The cassette packaging features a cardboard cover that emulates an old VHS sleeve, while the cassette tape is made to look like a VHS tape.

        Both volumes were nominated individually for Best Score Soundtrack for Visual Media at the 59th Annual Grammy Awards, though neither won.`,
        image: 'Stranger_Things_S1V1.png',
        price: 40,
        quantity: 25,
        rating: 0

     },
     {
        title: 'Untrue',
        artist: 'Burial',
        description: `Untrue is the second studio album by British electronic music producer Burial. Released on 5 November 2007 by Hyperdub, the album was produced by Burial in 2007 using the digital audio editing software Sound Forge. Untrue builds on the sound established by Burial on his eponymous debut album from the previous year, notably through its more prominent use of pitch-shifted and time-stretched vocal samples. The album, like Burial's previous work, also draws on influences from UK garage, ambient, and hardcore music.

        Untrue received widespread acclaim from critics, who praised Burial's production style on the album and generally hailed it as a progression and improvement over his prior musical output. It placed on the albums charts of Belgium and the United Kingdom and produced two singles, "Archangel" and "Ghost Hardware". Untrue later appeared in several publications' lists of the year's best albums, and received nominations for the Mercury Prize and the Shortlist Music Prize.
        
        In the years following its release, Untrue has since been viewed as a landmark album in the dubstep genre, and in electronic music in general. In a 2017 article, Pitchfork called the album "the most important electronic album of the century so far.`,
        image: 'Untrue.jpg',
        price: 40,
        quantity: 25,
        rating: 0

     }
    
]);

console.log('album seeded')

process.exit();

});




