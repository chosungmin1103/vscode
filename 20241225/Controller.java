package com.example.controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.example.model.Reservation;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/user/reservations")
public class ReservationController extends HttpServlet {
    private static final String DB_URL = "jdbc:mysql://localhost:8800/YAMU"; // DB URL
    private static final String DB_USER = "YAMU"; // DB 사용자명
    private static final String DB_PASSWORD = "YAMU1234"; // DB 비밀번호

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 세션에서 사용자 ID 가져오기 (로그인 시 저장된 세션 값 사용)
        String userId = (String) request.getSession().getAttribute("userId");
        if (userId == null) {
            response.sendRedirect("/login"); // 로그인 페이지로 리다이렉트
            return;
        }

        List<Reservation> reservations = new ArrayList<>();
        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
             PreparedStatement pstmt = conn.prepareStatement(
                     "SELECT reservation_date, hospital_name, reservation_status FROM reservation_table WHERE user_id = ?")) {
            pstmt.setString(1, userId);
            try (ResultSet rs = pstmt.executeQuery()) {
                while (rs.next()) {
                    Reservation reservation = new Reservation();
                    reservation.setReservationDate(rs.getString("reservation_date"));
                    reservation.setHospitalName(rs.getString("hospital_name"));
                    reservation.setReservationStatus(rs.getString("reservation_status"));
                    reservations.add(reservation);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
            throw new ServletException("데이터베이스 오류", e);
        }

        // 예약 정보를 JSP에 전달
        request.setAttribute("reservations", reservations);

        // JSP로 포워드
        RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/views/user_mng.jsp");
        dispatcher.forward(request, response);
    }
}
