import sys
from datetime import datetime
from pathlib import Path
import subprocess
import shutil
import requests

EXCLUDED_ITEMS = {Path('./build.py'), Path('./README.md'), Path('./setup.sh'), Path('./defaults'), Path('./extras'), Path('.git')}

def minify_dir(dir_name):
    """Minifies all JS and CSS files in a diretory"""
    for filename in dir_name.iterdir():
        if filename.is_file() and filename.suffix in {'.js', '.css'}:
            url = 'https://javascript-minifier.com/raw' if filename.suffix == 'js' else 'https://cssminifier.com/raw'
            data = { 'input': filename.read_bytes() }
            res = requests.post(url, data=data)
            filename.write_text(res.text)

def create_build_dir(build_name):
    """Transfers required files into a new directory with the passed name and zips it."""
    shutil.copytree(Path('.'), Path(build_name), ignore=lambda dir, paths: [p for p in paths if Path(dir) in EXCLUDED_ITEMS or Path(p) in EXCLUDED_ITEMS])
    # [TODO]: Get index.js to work with minification API
    # minify_dir(Path(f'./{build_name}/scripts'))
    minify_dir(Path(f'./{build_name}/styles'))
    subprocess.run(f'zip -r {build_name}.zip {build_name}', shell=True)

def get_version_as_date():
    """Returns a the name of the build in 'YYYYMMDD' format"""
    date = datetime.now()
    return '%04d%02d%02d' % (date.year, date.month, date.day)

def build():
    """Builds the project for deployment"""
    # Generate a name for the build if one was not passed
    version = sys.argv[2] if len(sys.argv) >= 3 else get_version_as_date()
    build_name = f'nkcsite-build-{version}'
    try:
        print(f'Building NKC Website as {build_name}')
        create_build_dir(build_name)
        print(f'Finished building {build_name}')
    except Exception as e:
        print(f'{type(e).__name__}: {e}')
        print('Failed to build NKC Website')

def clean():
    """Deletes build files in current dir """
    try:
        print('Cleaning all builds')
        subprocess.run('rm -rf nkcsite-build-*', shell=True)
        print('Successfully cleaned all builds')
    except Exception as e:
        print(f'{type(e).__name__}: {e}')
        print('Failed to clean builds')

if __name__ == '__main__':
    # Possible commands
    commands = {
        'build': build,
        'clean': clean,
    }

    # Make sure a valid command was provided
    if len(sys.argv) < 2 or sys.argv[1] not in commands:
        print('Please provide a valid option')
        sys.exit(1)

    # Identify and execute operation associated with command
    operation = commands[sys.argv[1]]
    operation()


