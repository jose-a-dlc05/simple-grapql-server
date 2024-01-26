export const findSingleEntity = (data, matchingElement) => {
	const returnedData = data.find((node) => node.id === matchingElement);
	if (!matchingElement) return null;
	return returnedData;
};
