from flask.cli import FlaskGroup

import app

cli = FlaskGroup(app)


@cli.command("populate_redis")
def populate_redis():
    pass


if __name__ == "__main__":
    cli()
