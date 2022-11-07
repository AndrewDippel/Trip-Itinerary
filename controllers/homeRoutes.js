const router = require('express').Router();
const { Destinations, User, Itinerary } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const projectData = await Destinations.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    // Serialize data so the template can read it
    const destinations = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('login', {
      destinations,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const projectData = await Destinations.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [
        {
          model: User,
        },
      ],
    });

    // Serialize data so the template can read it
    const destinations = projectData.map((project) => project.get({ plain: true }));
    console.log(destinations)

    // Pass serialized data and session flag into template
    res.render('dashboard', {
      destinations,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/destinations/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Destinations.findByPk(req.params.id, {
      where: {
        user_id: req.session.user_id
      },
      include: [
        {
          model: User,
        },
        ,
        {
          model: Itinerary
        }
      ],
    });

    const destinations = projectData.get({ plain: true });

    res.render('destinations', {
      ...destinations,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
