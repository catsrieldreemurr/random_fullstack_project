import Typography from "./typography";

export default function Navbar(){
  return (
    <nav className="bg-gray-800 p-5 flex flex-row justify-between items-center">
      <Typography variant="h1" isBold>Snip Snips Quotes</Typography>

      <div className="flex gap-5">
        <Typography>Quote of the Day</Typography>
        <Typography>All Quotes</Typography>
        <Typography>Leaderboards</Typography>
        <Typography>Register</Typography>
        <Typography>Log in</Typography>
        
      </div>
    </nav>
  )
}