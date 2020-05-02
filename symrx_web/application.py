from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/pictograms")
def picto():
    return render_template("picto.html")

@app.route("/about")
def about():
    return render_template("about_us.html")

if __name__ == "__main__":
  app.run(debug=True)
  app.static_folder = 'static'
