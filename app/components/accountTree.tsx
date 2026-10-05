import {Link} from "react-router";

export default function AccountTree(){
  return (
    <div>
      <h2 className="header">My Internet Presence</h2>
      <div>
        <p className="generic-text">
          Over the years my digital footprint has grown. Here is a collection of
          the ones that I consider myself to still be active on:
        </p>
        <div className="p-2">
          <ul>
            <li><Link target="_blank" to={"https://github.com/StuckBoy"}>GitHub</Link></li>
            <li><Link target="_blank" to={"https://gitlab.com/StuckBoy"}>GitLab</Link></li>
            <li><Link target="_blank" to={"https://letterboxd.com/StuckBoy/"}>Letterboxd</Link></li>
            <li><Link target="_blank" to={"https://backloggd.com/u/StuckBoy/"}>Backloggd</Link></li>
            <li><Link target="_blank" to={"https://www.twitch.tv/stuckboy"}>Twitch</Link></li>
            <li><Link target="_blank" to={"https://app.thestorygraph.com/profile/stuckboy"}>StoryGraph</Link></li>
            <li><Link target="_blank" to={"https://bsky.app/profile/stuckboy.bsky.social"}>Bluesky</Link></li>
            <li><Link target="_blank" to={"https://retroachievements.org/user/StuckBoy"}>RetroAchievements</Link></li>
            <li><Link target="_blank" to={"https://steamcommunity.com/id/stuckboy_/"}>Steam</Link></li>
            <li><Link target="_blank" to={"https://www.youtube.com/@stuckboy"}>YouTube</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
