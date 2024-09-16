const encryptionMap = {
    'ا': '1', 'ب': '2', 'ت': '3', 'ث': '4', 'ج': '5', 'ح': '6', 'خ': '7', 'د': '8',
    'ذ': '9', 'ر': '0', 'ز': '!', 'س': '@', 'ش': '#', 'ص': '$', 'ض': '%', 'ط': '^',
    'ظ': '&', 'ع': '*', 'غ': '(', 'ف': ')', 'ق': '-', 'ك': '_', 'ل': '=', 'م': '+',
    'ن': '{', 'ه': '}', 'و': '[', 'ي': ']', 'ى': ';', 'ء': ':', 'ئ': '"', 'ة': "'",
    ' ': ' '
};

const decryptionMap = {};
for (let key in encryptionMap) {
    decryptionMap[encryptionMap[key]] = key;
}

function toggleMenu() {
    const menuOptions = document.getElementById('menuOptions');
    menuOptions.classList.toggle('hidden');
}

function showExplanation() {
    alert('شرح الموقع: هذا الموقع يتيح لك تشفير وفك تشفير النصوص العربية باستخدام رموز وأرقام. أدخل النص في الحقل المخصص للتشفير وستظهر النتيجة أدناه. يمكنك أيضًا إدخال النص المشفر في الحقل المخصص لفك التشفير.');
}

function showUsage() {
    alert('كيفية الاستخدام: 1. أدخل النص العربي في الحقل المخصص. 2. اضغط على زر "تشفير" للحصول على النص المشفر. 3. أدخل النص المشفر في الحقل الثاني. 4. اضغط على زر "فك التشفير" للحصول على النص الأصلي.');
}

function encrypt() {
    const inputText = document.getElementById('inputText').value;
    if (!/^[\u0600-\u06FF\s]+$/.test(inputText)) {
        alert('الرجاء إدخال نص عربي فقط.');
        return;
    }
    let encryptedText = '';
    for (let char of inputText) {
        encryptedText += encryptionMap[char] || char; // Use the character itself if not found
    }
    document.getElementById('outputText').value = encryptedText;
}

function decrypt() {
    const inputText = document.getElementById('inputText').value;
    let decryptedText = '';
    for (let char of inputText) {
        decryptedText += decryptionMap[char] || char; // Use the character itself if not found
    }
    document.getElementById('decryptedText').value = decryptedText;
}

function copyOutput() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    outputText.classList.add('copied');
    setTimeout(() => outputText.classList.remove('copied'), 1000);
    alert('تم نسخ النص!');
}
