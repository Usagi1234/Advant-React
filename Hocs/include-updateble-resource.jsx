import { useEffect, useState } from "react";
import axios from "axios";

const toCapitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const includeUpdatableResource = (
  Component,
  resourceUrl,
  resourceName
) => {
  return (props) => {
    const [initialResource, setInitialResource] = useState(null);
    const [resource, setResource] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(resourceUrl);
        setInitialResource(response.data);
        setResource(response.data);
      })();
    }, []);

    const onChangeResource = (updates) => {
      setResource({ ...resource, ...updates });
    };

    const onPostResource = async () => {
      const response = await axios.post(resourceUrl, {
        [resourceName]: resource,
      });
      setResource(response.data);
      setInitialResource(response.data);
    };

    const onResetResource = () => {
      setResource(initialResource);
    };

    const resourceProps = {
      [resourceName]: resource,
      [`onChange${toCapitalize(resourceName)}`]: onChangeResource,
      [`onPost${toCapitalize(resourceName)}`]: onPostResource,
      [`onReset${toCapitalize(resourceName)}`]: onResetResource,
    };

    return (
      <Component
        {...props}
        {...resourceProps}
      />
    );
  };
};
