import Post from "~/components/post";

export default function Blog() {
  return (
    <div>
      <header className="flex-1 flex flex-col items-center gap-16 pb-4">
        <text className={"title"}>Blog</text>
      </header>
      <div>
        <p>
          Though I have never been able to keep a decent schedule, I've always
          enjoyed the idea of having a blog that is disconnected from any one
          social media. Time and time again, I have found myself frustrated with
          each one attempting to silo behavior into bite-sized pieces that are
          easily digestible for algorithmic optimization.
        </p>
        <p>
          This isn't to say that long form content on multiple social media
          sites <i>isn't</i> possible. What this <i>is</i> saying is that the
          very nature of those sites dissuades one from writing anything longer
          than a couple of sentences. Raw thoughts can certainly be conveyed
          within a few dozen characters, but not complex ideas. I'd like to
          believe that the everyday person is still fully capable of reading
          and comprehending a thought that's more than a small paragraph.
        </p>
        <p>
          Which brings us here, my intermittent postings about a variety of
          topics. Such topics include dissection of video games, the examination
          of books, and musings on life with more than a hint of snark and
          sarcasm. I cannot guarantee that the format will remain consistent,
          or that the quality of the writing is consistent. I can, however,
          guarantee that all thoughts are mine and mine alone, in whatever tone
          I felt like speaking in at the time. In essence, I guarantee that my
          humanity shines through with each and every post.
        </p>
      </div>
      <h1>2026</h1>
      <Post/>
      <footer/>
    </div>
  );
}