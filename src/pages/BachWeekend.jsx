import day1 from '../assets/day1.jpeg';
import setupcrew from '../assets/setupcrew.jpeg';
import dragqueens from '../assets/dragqueens.jpeg';
import handles from '../assets/handles.jpg';

function BachWeekend() {
  return (
    <main className="section">
      <h2>Bachelorette Weekend</h2>

      <article className="blog-post">
        <h3>Day 1 - Start of the Party</h3>
        <p>
          We kicked off the bachelorette weekend with a drive up to Huntington Beach, and the
          whole car ride felt like the official start of the celebration. Music blasting,
          iced coffees in hand, everyone talking over each other. The kind of excited chaos
          that only happens when a group of girls hasn’t hung out in a while. When we finally
          pulled up to the Airbnb, it was even nicer than we expected: bright, beachy, and
          just big enough for all of us to spread out and claim our corners.
        </p>
        <figure>
          <img 
            src={day1} 
            alt="first arrival at airbnb" 
            style={{ width: '100%', borderRadius: '8px' }} 
          />
          <figcaption style={{ marginTop: '10px', color: '#555' }}>
            My sister, Marki, and I when we first got to the AirBnB.
          </figcaption>
        </figure>
        <p>
          We spent the afternoon unpacking, decorating, and turning the place into a mini
          party house with balloons, banners, snacks everywhere, and a fridge slowly filling
          with drinks. By the time dinner rolled around, our hibachi chef arrived and set up
          right in the backyard. It was such a fun experience watching him cook everything
          in front of us which include the fire tricks, the jokes, and the giant clouds of steam. The food
          was amazing, and we were all laughing nonstop. It was the perfect first night:
          relaxed, fun, and full of that “okay, this weekend is going to be good” feeling.
        </p>
        <figure>
          <img 
            src={setupcrew} 
            alt="the group of us who decorated the sirbnb" 
            style={{ width: '100%', borderRadius: '8px' }} 
          />
          <figcaption style={{ marginTop: '10px', color: '#555' }}>
            Our little group who decorate the AirBnB for the theme "Seashells & Wedding Bells".
          </figcaption>
        </figure>
      </article>
      <article className="blog-post">
        <h3>Day 2 - Main Event</h3>
        <p>
          Day two was the big one. The day we all knew would be packed from morning to
          night. We started with brunch at Mary’s Burgers, which also happened to be a drag
          show, and honestly it was the highlight of the morning. The performers were
          hilarious, the energy was high, and the food was so good that we all ended up
          stealing bites off each other’s plates. It was loud, colorful, and exactly the kind
          of chaotic fun you want on a bachelorette trip.
        </p>
        <figure>
          <img 
            src={dragqueens} 
            alt="drag queens at brunch" 
            style={{ width: '100%', borderRadius: '8px' }} 
          />
          <figcaption style={{ marginTop: '10px', color: '#555' }}>
            The group of drag queens who performed for our brunch.
          </figcaption>
        </figure>
        <p>
          After brunch, we wandered around for a bit before stopping at Handel’s for ice
          cream. I’m not kidding when I say this place is worth the hype. The scoops were
          huge, the flavors were super rich, and it hit the spot after such a big brunch.
          Definitely a new favorite.
        </p>
        <figure>
          <img 
            src={handles} 
            alt="handles, the best ice cream" 
            style={{ width: '100%', borderRadius: '8px' }} 
          />
          <figcaption style={{ marginTop: '10px', color: '#555' }}>
            Highly recomend This ice cream company!
          </figcaption>
        </figure>
        <p>
          We headed back to the Airbnb to get ready for the night, and the whole place turned
          into a glam station. Curling irons everywhere, makeup bags exploded across the
          counters, music playing while everyone tried on outfits. Once we were finally ready,
          we went out to dinner and then hit a club afterward. The night was full of dancing,
          laughing, and just soaking up the moment. It felt like one of those nights you know
          you’ll look back on and smile about.
        </p>
      </article>
      <article className="blog-post">
        <h3>Day 3 - Winding Down</h3>
        <p>
          By day three, we were all moving a little slower, but in that cozy, content way
          that comes after a really good weekend. We made avocado toast for breakfast and
          tried to rally for a yoga class on the beach. Of course, in true us fashion, we
          were running late and ended up missing the start of it. But honestly, standing on
          the sand with the ocean breeze and morning sun still felt peaceful enough.
        </p>

        <p>
          After packing up the Airbnb and saying goodbye to our little weekend home, we
          headed back toward San Diego. I thought the weekend was over, but it ended up
          taking a sweet turn. We spontaneously met up with the whole extended family for
          dinner. It was loud, warm, and familiar, the perfect contrast to the wildness of
          the weekend. It wrapped everything up in the best way. A fun, chaotic, memorable
          trip followed by a cozy family ending.
        </p>
      </article>
    </main>
  );
}

export default BachWeekend;