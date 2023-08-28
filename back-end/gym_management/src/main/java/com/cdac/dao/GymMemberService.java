package com.cdac.dao;

import java.util.List;

import com.cdac.pojos.GymMember;


public interface GymMemberService {
	GymMember findById(int memberId );
    List<GymMember>findAll();
    GymMember save(GymMember gm);
    GymMember update(GymMember gm);
    void deleteById(int memberId);

}