import Profile from "~/components/profile";
import AccountTree from "~/components/accountTree";
export default function Home() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <title>StuckBoy's Corner</title>
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center">
          <text className="title">StuckBoy's Corner</text>
          <text className="sub-text">(It ain't much, but it's mine)</text>
        </header>
        <Profile/>
        <AccountTree/>
      </div>
    </main>
  );
}
