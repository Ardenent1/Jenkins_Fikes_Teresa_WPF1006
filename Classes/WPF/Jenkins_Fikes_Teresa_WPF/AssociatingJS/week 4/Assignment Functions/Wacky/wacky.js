/**
 * Teresa Jenkins Fikes
 * 10/23/14.
 * WPF 1408 Section 01
 * Week 4-Wacky Assignment
 */
prompt(“Here are a few Countries and their Capital Cities”)
public class Main {
    public static void main(String[] args) {

        String[][] countries = new String[3][2];
        Countries [0][0] = “United States”;
        Countries [0][1] = “Washington D. C.”
	    Countries [1][0] = “Canada”;
        Countries [1][1] = “Ottawa”;
        Countries [2][0] = “Finland”;
        Countries [2][1] = “Helsinki”;

        For (int I + 0; I < countries.length; i++) {
            StringBuilder sb = new StringBuilder();
            For (int j = 0; j < countries[i].length; j++) {
                If (j == 0) {
                    sb.append(“The capital of  “);
                }
            