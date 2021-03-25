//home page

export const home = async (req, res) => {
    try {
        res.status(200).send('Home Page ...');
    } catch (error) {
        res.status(400).send(error);
    }
};
