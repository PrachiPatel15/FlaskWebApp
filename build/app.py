from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/verify-otp', methods=['POST'])
def verify_otp():
    otp = request.json.get('otp')
    if otp and len(otp) == 6:
        print("Submitted OTP:", otp) 
        return jsonify({'message': 'OTP verified successfully'})
    else:
        return jsonify({'error': 'Invalid OTP'})

if __name__ == '__main__':
    app.run(debug=True)
