import express from 'express';
import { auth } from '../middleware/auth.js';
import User from '../models/User.js';

const router = express.Router();

// Get user's about section
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select('about');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user.about);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update about section (authenticated users only)
router.put('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { title, bio, skills, location, socialLinks } = req.body;
    user.about = {
      ...user.about,
      title: title || user.about.title,
      bio: bio || user.about.bio,
      skills: skills || user.about.skills,
      location: location || user.about.location,
      socialLinks: {
        ...user.about.socialLinks,
        ...socialLinks,
      },
    };

    await user.save();
    res.json(user.about);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add a skill
router.post('/skills', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { skill } = req.body;
    if (!user.about.skills.includes(skill)) {
      user.about.skills.push(skill);
      await user.save();
    }

    res.json(user.about.skills);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Remove a skill
router.delete('/skills/:skill', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.about.skills = user.about.skills.filter((s) => s !== req.params.skill);
    await user.save();

    res.json(user.about.skills);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
