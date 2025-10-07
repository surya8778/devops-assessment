import Link from "next/link";

export default function About() {
  return (
    <div style={styles.container}>
      <h1>About Page</h1>
      <p>This page shows routing and React rendering inside the containerized app.</p>
      <Link href="/" style={styles.link}>Go Home</Link>
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
