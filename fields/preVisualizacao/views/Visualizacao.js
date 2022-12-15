/** @jsx jsx */

import { jsx } from "@emotion/core";

const Visualizacao = ({ bodyText, title }) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				height: "auto",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					width: "470px",
					alignItems: "center",
					padding: "9px 14px 9px 14px",
					gap: "1rem",
					backgroundColor: "#fff",
					backdropFilter: "blur(15px)",
					filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
					borderRadius: "14px",
					height: "auto",
					position: "relative",
				}}
			>
				<div
					style={{
						display: "flex",
						clipPath: "circle()",
						width: "3.5rem",
					}}
				>
					<img src="../../../public/logo.png" alt="Logo" />
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: ".45rem",
					}}
				>
					<span>{title}</span>
					<span>{bodyText}</span>
				</div>
			</div>
		</div>
	);
};

export default Visualizacao;
