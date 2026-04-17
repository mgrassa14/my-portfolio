import babyoverallsPattern from '../assets/babyoverallsPattern.jpeg';
import easter2026 from '../assets/easter2026.jpeg';
import pickingyarn from '../assets/pickingyarn.jpeg';
function Blog() {
  return (
    <main className="section">
      <h2>My Blog</h2>
      <p>
        Welcome to my blog! This is where I'll document my spring break
        adventures.
      </p>

      <article className="blog-post">
        <h3>Spring Break 2026</h3>
        <p>
          Honestly, my spring break was pretty laid back, in the best way.  
          The first couple of days were the most relaxed I’ve felt in a long time. I finally slept more than nine hours 
          (first time this month, which is wild), spent time with my family back in Alpine, CA, and helped around the house.
        </p>
        <p>
          One of the highlights was helping my older cousin with her baby shower. She asked me to make some party favors, 
          so my mom and I went to a few different stores looking for yarn in the right colors and textures. After that, I 
          spent some time testing crochet patterns, baby overalls, a pink rose, and a few other ideas she might want to 
          give out as favors
        </p>
        <figure>
          <img 
            src={pickingyarn} 
            alt="Went to Micheals and bought some pink crochet yarn." 
            style={{ width: '100%', borderRadius: '8px' }} 
          />
          <figcaption style={{ marginTop: '10px', color: '#555' }}>
            This is one of the types of yarn my mom and I bought to try out the different crochet patterns with.
          </figcaption>
        </figure>
        <figure>
          <img 
            src={babyoverallsPattern} 
            alt="Baby overalls crochet pattern." 
            style={{ width: '100%', borderRadius: '8px' }} 
          />
          <figcaption style={{ marginTop: '10px', color: '#555' }}>
            Here is the crochet pattern I tried to replicate with the different yearn that I had purchase from the previous image.
          </figcaption>
        </figure>
        <p>
          By the next Sunday, my family and I headed to a relative’s house to celebrate Easter together. We ate good food, 
          hung out with the whole family, and played a bunch of card games
        </p>
        <figure>
          <img 
            src={easter2026} 
            alt="My mom and I on easter Sunday of 2026." 
            style={{ width: '100%', borderRadius: '8px' }} 
          />
          <figcaption style={{ marginTop: '10px', color: '#555' }}>
            Here is a picture of my mom and I on Easter Sunday.
          </figcaption>
        </figure>
        <p>
          Overall, my spring break was sweet, simple, and exactly what I needed.
        </p>
      </article>
    </main>
  );
}

export default Blog;