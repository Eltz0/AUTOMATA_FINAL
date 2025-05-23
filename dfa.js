const dfa = {
  states: ['S0', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
  start: 'S0',
  accept: ['S7', 'S8'], // accepting states are double-circled
  transitions: {
    S0: { a: 'S1', b: 'S1' },
    S1: { a: 'S2', b: 'S2' },
    S2: { a: 'S4', b: 'S3' },
    S3: { a: 'S5', b: 'S3' },
    S4: { a: 'S5', b: 'S6' },
    S5: { a: 'S8', b: 'S6' },
    S6: { a: 'S5', b: 'S7' },
    S7: { a: 'S8', b: 'S7' },
    S8: { a: 'S8', b: 'S7' }
  }
};

const dfa_large = {
  states: [
    "q0", "q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10",
    "q11", "q12", "q13", "q14", "q15", "q16", "q17", "q18", "q19", "q20",
    "q21", "q22", "q23", "q24", "q25", "q26", "q27", "q28", "q29", "q30",
    "q31", "q32", "q33", "q34", "q35", "q36", "q37", "q38", "q39", "q40",
    "q41", "q42", "q43", "q44", "q45", "q46", "q47", "q48", "q49", "q50", "q51",
    "q52", "q53", "q54","q55", "q56", "q57","q58","T",
  
  ],
  alphabet: ["0", "1"],
  start: "q0",
  accept: ["q57", "q58"], // Example from your image (double circles), adjust as needed
  transitions: {
          "q0": { "1": "q2", "0": "q1" },
          "q1": { "1": "T", "0": "q3" },
          "q2": { "1": "q3", "0": "T" },
          "q3": { "1": "q4", "0": "q5" },
          "q4": { "1": "q6", "0": "q7" },
          "q5": { "1": "q7", "0": "q6" },
          "q6": { "1": "q8", "0": "q9" },
          "q7": { "1": "q10", "0": "q10" },
          "q8": { "1": "q11", "0": "q36" },
          "q9": { "1": "q35", "0": "q21" },
          "q10": { "1": "q13", "0": "q12" },
          "q11": { "1": "q14", "0": "q15" },
          "q12": { "1": "T", "0": "q16" },
          "q13": { "1": "q16", "0": "q17" },
          "q14": { "1": "q18", "0": "q34" },
          "q15": { "1": "q32", "0": "q21" },
          "q16": { "1": "q16", "0": "q20" },
          "q17": { "1": "q16", "0": "T" },
          "q18": { "1": "q14", "0": "q19" },
          "q19": { "1": "q31", "0": "q21" },
          "q20": { "1": "q52", "0": "T" },
          "q21": { "1": "q8", "0": "q22" },
          "q22": { "1": "q32", "0": "q23" },
          "q23": { "1": "q24", "0": "q22" },
          "q24": { "1": "q25", "0": "q33" },
          "q25": { "1": "q26", "0": "q27" },
          "q26": { "1": "q28", "0": "q29" },
          "q27": { "1": "q32", "0": "q54" },
          "q28": { "1": "q26", "0": "q30" },
          "q29": { "1": "q38", "0": "q54" },
          "q30": { "1": "q31", "0": "q54" },
          "q31": { "1": "q42", "0": "q41" },
          "q32": { "1": "q39", "0": "q37" },
          "q33": { "1": "q10", "0": "q54" },
          "q34": { "1": "q38", "0": "q39" },
          "q35": { "1": "q39", "0": "q40" },
          "q36": { "1": "q10", "0": "q39" },
          "q37": { "1": "q48", "0": "q12" },
          "q38": { "1": "q43", "0": "q53" },
          "q39": { "1": "q44", "0": "q45" },
          "q40": { "1": "q44", "0": "q12" },
          "q41": { "1": "q48", "0": "q54" },
          "q42": { "1": "q48", "0": "q51" },
          "q43": { "1": "q50", "0": "q46" },
          "q44": { "1": "q16", "0": "q47" },
          "q45": { "1": "q52", "0": "q16" },
          "q46": { "1": "q16", "0": "q54" },
          "q47": { "1": "q50", "0": "T" },
          "q48": { "1": "q50", "0": "q49" },
          "q49": { "1": "q50", "0": "q54" },
          "q50": { "1": "q50", "0": "q51" },
          "q51": { "1": "q52", "0": "q54" },
          "q52": { "1": "q52", "0": "q53" },
          "q53": { "1": "T", "0": "q54" },
          "q54": { "1": "q56", "0": "q55" },
          "q55": { "1": "q56", "0": "q58" },
          "q56": { "1": "q57", "0": "q55" },
          "q57": { "1": "q57", "0": "q55" },
          "q58": { "1": "q56", "0": "q58" }
        }};