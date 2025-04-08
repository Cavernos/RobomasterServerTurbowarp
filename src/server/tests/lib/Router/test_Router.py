import unittest

from lib.Router import Router


class TestRouter(unittest.TestCase):
    def setUp(self):
        self.router = Router()
    def test_get_method_http_param(self):
        self.router.get("test", "test",url="hello")
        self.assertEqual(self.router.routes[-1].params,  {"url": "hello", "http_method": "GET"})