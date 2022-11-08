const router = require('express').Router();
const { Destinations } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newDestination = await Destinations.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newDestination);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/', withAuth, async (req, res) => {
  try {
    const destinationData = await Destinations.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!destinationData) {
      res.status(404).json({ message: 'No destination found with this id!' });
      return;
    }

    res.status(200).json(destinationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
