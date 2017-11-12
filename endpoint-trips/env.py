import os
from os.path import join, dirname

from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

GOOGLE_API_KEY = os.environ.get("GOOGLE_API_KEY")
if GOOGLE_API_KEY is None:
    raise RuntimeError('GOOGLE_API_KEY is missing. are you missing a ".env" file?')
