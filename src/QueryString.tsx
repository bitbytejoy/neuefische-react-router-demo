import {useSearchParams} from "react-router-dom";

export default function QueryString() {
  const [queryString] = useSearchParams();
  return (
    <div>
      <pre><code>{JSON.stringify(queryString.get("a"))}</code></pre>
      <pre><code>{JSON.stringify(queryString.get("c"))}</code></pre>
      <pre><code>{JSON.stringify(queryString.get("d"))}</code></pre>
    </div>
  )
}