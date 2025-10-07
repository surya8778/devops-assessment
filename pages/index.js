import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1>🚀 Welcome to the DevOps Assessment App</h1>
      <p>This simple Next.js app is built for Docker, GitHub Actions & Kubernetes deployment.</p>
      <Link href="/about" style={styles.link}>Go to About Page</Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "10%",
    fontFamily: "Arial, sans-serif",
  },
  link: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#0070f3",
    color: "#fff",
    borderRadius: "5px",
    textDecoration: "none",
  }
};

