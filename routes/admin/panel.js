const express = require('express');
const router = express.Router();
const check_admin_login = require('../../middlewares/check_login').check_admin_login;
const get_index_info = require('../../utils/admin/panel').get_index_info;

router.get('/', check_admin_login, async (req, res, next) => {
  let _index_info = await get_index_info(req.session.user);
  res.render('admin/panel', { index_info: _index_info });
});

module.exports = router
