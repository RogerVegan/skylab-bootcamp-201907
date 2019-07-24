/**
 * checks wether a testing result matxhes an expected value. In case of matching values,
 * it does nothing. Otherwise shows an error explaining the unmatching situation.
 * 
 * 
 * 
 * @param {*} result -- The testing valuento evaluate
 * @param {*} expected  -- The expected value to check the result against
 */
function check(result, expected) {
    if (result.toString() !== expected.toString()) 
        console.error('error: result (' + result + ') does not match expected value (' + expected + ')')
}