/** @jsx jsx */

import { jsx } from "@emotion/core";
import { FieldContainer, FieldLabel, FieldInput } from "@arch-ui/fields";
import Visualizacao from "./Visualizacao";

const StarsField = ({ field, errors }) => (
	<FieldContainer>
		<FieldLabel
			htmlFor={`ks-input-${field.path}`}
			field={field}
			errors={errors}
		/>
		<FieldInput>
			<Visualizacao title={field.config.title} bodyText={field.config.text} />
		</FieldInput>
	</FieldContainer>
);
export default StarsField;
