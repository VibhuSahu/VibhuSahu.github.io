/**
 * Represents a LeetCode user and provides methods to retrieve
 * problem-solving statistics using a public API.
 *
 * This class allows you to fetch:
 * - Total solved problems
 * - Easy, Medium, and Hard problem counts
 * - User profile link
 *
 * Data is fetched from:
 * https://alfa-leetcode-api.onrender.com/
 *
 * @class Leetcode
 *
 * @example
 * const lc = new Leetcode("your_username");
 *
 * // Using async/await
 * async function run() {
 *   const total = await lc.totalSubmissionNumber();
 *   const easy = await lc.easySubmissionNumber();
 *   const medium = await lc.mediumSubmissionNumber();
 *   const hard = await lc.hardSubmissionNumber();
 *
 *   console.log({ total, easy, medium, hard });
 * }
 *
 * run();
 *
 * @example
 * // Using .then()
 * const lc = new Leetcode("your_username");
 * lc.totalSubmissionNumber().then(console.log);
 */
class Leetcode {
    #username;
    #url;

    /**
     * Creates an instance of Leetcode class to fetch solved problem counts for a given username.
     * 
     * @param {String} username 
     */
    constructor(username) {
        this.#username = username;
        this.#url = `https://alfa-leetcode-api.onrender.com/${username}/solved`;
    }

    /**
     * Fetches the total number of solved problems for the user.
     * 
     * @returns {Promise<number>} The total number of solved problems.
     */
    async totalSubmissionNumber() {
        try {
            const response = await fetch(this.#url);
            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            return Number(data.solvedProblem) || 0;

        } catch (error) {
            console.error('Fetch error:', error);
            return 0;
        }
    }

    /**
     * Fetches the number of easy solved problems for the user.
     * 
     * @returns {Promise<number>} Number of easy solved problems.
     */
    async easySubmissionNumber() {
        try {
            const response = await fetch(this.#url);
            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            return Number(data.easySolved) || 0;

        } catch (error) {
            console.error('Fetch error:', error);
            return 0;
        }
    }

    /**
     * Fetches the number of medium solved problems for the user.
     * 
     * @returns {Promise<number>} Number of medium solved problems.
     */
    async mediumSubmissionNumber() {
        try {
            const response = await fetch(this.#url);
            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            return Number(data.mediumSolved) || 0;

        } catch (error) {
            console.error('Fetch error:', error);
            return 0;
        }
    }

    /**
     * Fetches the number of hard solved problems for the user.
     * 
     * @returns {Promise<number>} Number of hard solved problems.
     */
    async hardSubmissionNumber() {
        try {
            const response = await fetch(this.#url);
            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            return Number(data.hardSolved) || 0;

        } catch (error) {
            console.error('Fetch error:', error);
            return 0;
        }
    }

    /**
     * Fetches the Leetcode profile link for the user.
     * 
     * @returns {Promise<String>} Leetcode profile link
     */
    async LeetcodeProfileLink() {
        return `https://leetcode.com/${this.#username}` || "https://leetcode.com";
    }
}