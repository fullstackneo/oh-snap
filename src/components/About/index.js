// import React, { useState } from 'react';
import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
  // const [seconds, setSeconds] = useState(0);

  // function startStopwatch() {
  //   // let updatedSeconds = seconds;
   
  //     // updatedSeconds += 1;
  //     // console.log(updatedSeconds);
  //     setSeconds(old=>old+1);
  
  // }
  return (
    <section className="my-5">
      {/* <div>
        {seconds}
        <button onClick={startStopwatch}>Start</button>
      </div> */}
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: '100%' }} alt="cover" />
      <div className="my-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut
          ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean
          sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis.
          In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies
          mollis. In hac habitasse platea dictumst.
        </p>
      </div>
    </section>
  );
}

export default About;
