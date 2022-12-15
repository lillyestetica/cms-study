/** @jsx jsx */

import { jsx } from "@emotion/core";
import Visualizacao from "./Visualizacao";

export default function StarsCell({ field }) {
	const { title, text } = field.config;
	return <Visualizacao title={title} bodyText={text} />;
}
