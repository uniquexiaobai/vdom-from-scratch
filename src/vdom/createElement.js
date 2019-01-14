const createElement = (tagName, {
    attrs = {},
    children = [],
} = {}) => {
    var vElem = Object.create(null);

    return Object.assign(vElem, {
        tagName,
        attrs,
        children,
    });
};

export default createElement;