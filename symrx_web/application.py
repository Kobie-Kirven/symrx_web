from flask import Flask, render_template,  redirect, url_for, request


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

@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        if request.form['username'] != 'admin' or request.form['password'] != 'admin':
            error = 'Invalid Credentials. Please try again.'
        else:
            return redirect(url_for('home'))
    return render_template('login.html', error=error)

if __name__ == "__main__":
  app.run(debug=True)
  app.static_folder = 'static'
