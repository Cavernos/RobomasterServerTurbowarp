import unittest

from lib.Router import Router


class TestRouter(unittest.TestCase):
    def setUp(self):
        self.router = Router()

    def test_get_method_http_param(self):
        name = "test"
        self.router.get(name, name,name)
        self.assertEqual(self.router.routes[-1].params,  {"http_method": "GET"})
    def test_post_method_http_param(self):
        name = "test"
        self.router.get(name, name, name)
        self.assertEqual(self.router.routes[-1].params,  {"http_method": "POST"})