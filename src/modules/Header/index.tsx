import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const headerStyle: React.CSSProperties = {
    width: "100%",
    height: "80px",
    backgroundColor: "white",
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 20,
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  };

  const navStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    color: "#666666",
    fontWeight: "bold",
    fontSize: "16px",
  };

  const linkBaseStyle: React.CSSProperties = {
    cursor: "pointer",
    padding: "10px 16px",
    fontSize: "16px",
    borderRadius: "24px",
  };

  const activeStyle: React.CSSProperties = {
    backgroundColor: "#FE4C63",
    color: "white",
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <Image
          priority
          src="/portfolio/assets/Baharan.svg"
          alt="logo"
          width={100}
          height={60}
        />
        <div style={navStyle}>
          <p
            style={{
              ...linkBaseStyle,
              ...(pathname === "/" ? activeStyle : {}),
            }}
            onClick={() => router.push("/")}
          >
            Home
          </p>
          <p
            style={{
              ...linkBaseStyle,
              ...(pathname === "/projects" ? activeStyle : {}),
            }}
            onClick={() => router.push("/projects")}
          >
            Projects
          </p>
          <p
            style={{
              ...linkBaseStyle,
              ...(pathname === "/about" ? activeStyle : {}),
            }}
            onClick={() => router.push("/about")}
          >
            About
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
