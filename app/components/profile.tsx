export default function Profile(){
  return (
    <div>
      <h1>About Me</h1>
      <div className="flex justify-center relative">
        <img className="max-w-75" src="assets/images/headshot.jpg" alt="Picture of Me"/>
      </div>
      <div>
        <p>
          My name is Zachary Stuck. I'm a graduate of Northern Michigan University
          with a BS in Mobile Web & App Development. Ever since I can remember, I
          have loved technology and the endless possibilities it holds for people
          around the world.
        </p>
        <p>
          My hobbies include reading, gardening with my fiancé, watching a wide
          array of movies, and playing video games with friends I made during my
          days at university.
        </p>
      </div>
      <div>
        <p>
          For more info on my programming experience or hobbies, check out the
          links below!
        </p>
      </div>
    </div>
  );
}
