
export default async function handler(req, res) {
    const { kelime } = req.query;
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${kelime}`);
    const data = await response.json();
    res.status(200).json(data[0].anlamlarListe);
}