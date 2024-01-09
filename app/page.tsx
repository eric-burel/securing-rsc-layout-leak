/**
 * Get's private data, that is NOT user-specific
 * for instance a blog post
 */
function getPaidContent() {
  // THIS IS WRONG
  // You should always verify access again when accessing the data
  // You can't trust the layout to do the check
  return "My paid article";
}
/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  // Send a request to "/" with a RSC header set to 1
  // you will see the paid content!
  const paidContent = getPaidContent();
  return <div>{paidContent}</div>;
}
