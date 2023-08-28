package com.cdac.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.pojos.GymMember;
import com.cdac.pojos.User;

public interface GymMemberDao extends JpaRepository<GymMember, Integer> {
 

}